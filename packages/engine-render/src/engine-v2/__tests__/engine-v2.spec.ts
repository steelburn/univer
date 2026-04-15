/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { describe, expect, it, vi } from 'vitest';
import { Scene } from '../../scene';
import { EngineV2 } from '../engine-v2';

describe('EngineV2', () => {
    it('should be an instance of EngineV2', () => {
        const engine = new EngineV2('test-engine', { elementWidth: 320, elementHeight: 180, dpr: 1 });
        expect(engine).toBeInstanceOf(EngineV2);
        engine.dispose();
    });

    it('should track dirty regions for scenes', () => {
        const engine = new EngineV2('test-engine', { elementWidth: 320, elementHeight: 180, dpr: 1 });
        const scene = new Scene('test-scene', engine);

        engine.markSceneDirty(scene, { left: 10, top: 10, right: 50, bottom: 50 });

        const regions = engine._getActiveDirtyRegionsForScene(scene);
        // Before render frame, active regions are not set yet.
        expect(regions).toBeNull();

        engine.dispose();
    });

    it('should apply dirty-region clipping during render frame', () => {
        const engine = new EngineV2('test-engine', { elementWidth: 320, elementHeight: 180, dpr: 1 });
        const scene = new Scene('test-scene', engine);
        const renderSpy = vi.fn();

        engine.runRenderLoop(() => {
            scene.render();
            renderSpy();
        });

        engine.markSceneDirty(scene, { left: 10, top: 10, right: 50, bottom: 50 });
        scene.makeDirty(true);

        // Trigger one frame manually via the internal render function
        (engine as any)._renderFunction(performance.now());

        expect(renderSpy).toHaveBeenCalledTimes(1);

        engine.dispose();
    });

    it('should fallback to full render when dirty area exceeds threshold', () => {
        const engine = new EngineV2('test-engine', { elementWidth: 100, elementHeight: 100, dpr: 1 });
        const scene = new Scene('test-scene', engine);
        const clearSpy = vi.spyOn(engine, 'clearCanvas');
        const renderSpy = vi.fn();

        engine.runRenderLoop(() => {
            scene.render();
            renderSpy();
        });

        // Mark almost the entire canvas as dirty (> 65% threshold)
        engine.markSceneDirty(scene, { left: 0, top: 0, right: 100, bottom: 100 });
        scene.makeDirty(true);

        (engine as any)._renderFunction(performance.now());

        expect(renderSpy).toHaveBeenCalledTimes(1);
        // Full clear should have been called because dirty area >= threshold
        expect(clearSpy).toHaveBeenCalled();

        engine.dispose();
    });

    it('should not clear full canvas when dirty region is small', () => {
        const engine = new EngineV2('test-engine', { elementWidth: 200, elementHeight: 200, dpr: 1 });
        const scene = new Scene('test-scene', engine);
        const clearSpy = vi.spyOn(engine, 'clearCanvas');
        const renderSpy = vi.fn();

        engine.runRenderLoop(() => {
            scene.render();
            renderSpy();
        });

        // Mark a small region as dirty (< 65% of 200x200 = 26000)
        // Note: scene.makeDirty(true) would mark the full scene as dirty and trigger
        // a full clear. Here we simulate a viewport-scroll-like dirty region only.
        engine.markSceneDirty(scene, { left: 10, top: 10, right: 60, bottom: 60 });
        (scene as any)._dirty = true;
        (scene as any)._layers.forEach((layer: any) => layer.makeDirty(true));

        (engine as any)._renderFunction(performance.now());

        expect(renderSpy).toHaveBeenCalledTimes(1);
        // Should NOT do a full clear because dirty area is small
        expect(clearSpy).not.toHaveBeenCalled();

        engine.dispose();
    });
});
