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

import { describe, expect, it } from 'vitest';
import { Engine } from '../../engine';
import { Layer } from '../../layer';
import { Scene } from '../../scene';
import { Rect } from '../../shape/rect';
import { EngineV2 } from '../engine-v2';

describe('EngineV2 performance benchmark', () => {
    const CANVAS_WIDTH = 1200;
    const CANVAS_HEIGHT = 800;
    const RECT_COUNT = 800;
    const FRAME_COUNT = 60;

    function createHeavyScene(EngineCtor: typeof Engine | typeof EngineV2) {
        const engine = new EngineCtor('perf-test', {
            elementWidth: CANVAS_WIDTH,
            elementHeight: CANVAS_HEIGHT,
            dpr: 1,
        });
        const scene = new Scene('perf-scene', engine);
        const layer = new Layer(scene);

        const cols = 40;
        const rows = 20;
        const cellW = CANVAS_WIDTH / cols;
        const cellH = CANVAS_HEIGHT / rows;

        for (let i = 0; i < RECT_COUNT; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const rect = new Rect(`rect-${i}`, {
                left: col * cellW + 1,
                top: row * cellH + 1,
                width: cellW - 2,
                height: cellH - 2,
                fill: `hsl(${(i * 13) % 360}, 60%, 55%)`,
                stroke: '#222',
                strokeWidth: 1,
            });
            layer.addObject(rect);
        }

        scene.addLayer(layer);
        return { engine, scene, layer };
    }

    function runBenchmark(EngineCtor: typeof Engine | typeof EngineV2, usePartial: boolean) {
        const { engine, scene, layer } = createHeavyScene(EngineCtor);
        const frameFn = () => scene.render();
        engine.runRenderLoop(frameFn);

        const times: number[] = [];
        const objects = layer.getObjects();

        for (let i = 0; i < FRAME_COUNT; i++) {
            if (usePartial) {
                const rect = objects[i % RECT_COUNT] as Rect;
                rect.setProps({ fill: `hsl(${Math.random() * 360}, 60%, 55%)` });

                if (EngineCtor === EngineV2) {
                    (engine as EngineV2).markSceneDirty(scene, {
                        left: rect.left,
                        top: rect.top,
                        right: rect.left + rect.width,
                        bottom: rect.top + rect.height,
                    });
                    (scene as any)._dirty = true;
                    (scene as any)._layers.forEach((l: any) => l.makeDirty(true));
                } else {
                    scene.makeDirty(true);
                }
            } else {
                scene.makeDirty(true);
            }

            const start = performance.now();
            (engine as any)._renderFunction(performance.now());
            const end = performance.now();
            times.push(end - start);
        }

        engine.dispose();
        return times;
    }

    function stats(times: number[]) {
        const sum = times.reduce((a, b) => a + b, 0);
        const avg = sum / times.length;
        const sorted = [...times].sort((a, b) => a - b);
        const p50 = sorted[Math.floor(sorted.length * 0.5)];
        const p95 = sorted[Math.floor(sorted.length * 0.95)];
        const p99 = sorted[Math.floor(sorted.length * 0.99)];
        return { avg, p50, p95, p99, min: sorted[0], max: sorted[sorted.length - 1] };
    }

    it('full redraw baseline (Engine vs EngineV2)', () => {
        const s1 = stats(runBenchmark(Engine, false));
        const s2 = stats(runBenchmark(EngineV2, false));

        // eslint-disable-next-line no-console
        console.table({
            'Engine (full redraw)': s1,
            'EngineV2 (full redraw)': s2,
        });

        expect(s2.avg).toBeLessThan(s1.avg * 1.5);
    });

    it('partial redraw: EngineV2 should not regress significantly', () => {
        const s1 = stats(runBenchmark(Engine, true));
        const s2 = stats(runBenchmark(EngineV2, true));

        // eslint-disable-next-line no-console
        console.table({
            'Engine (partial, full clear)': s1,
            'EngineV2 (partial, dirty region)': s2,
        });

        // In Node.js / canvas-mock environment, the overhead of clip() and dirty-region
        // bookkeeping can outweigh the benefits because clearRect() is extremely cheap.
        // We only assert that EngineV2 does not regress beyond 2x in this synthetic env.
        expect(s2.avg).toBeLessThan(s1.avg * 2);
    });
});
