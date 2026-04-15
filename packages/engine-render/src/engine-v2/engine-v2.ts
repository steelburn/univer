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

import type { IBoundRectNoAngle } from '../basics/vector2';
import type { IEngineOption } from '../engine';
import type { Scene } from '../scene';
import { requestNewFrame } from '../basics/tools';
import { Engine } from '../engine';
import { ICanvasColorService } from '../services/canvas-color.service';
import { DirtyRegionManager, expandRect, intersectRect } from './dirty-region';

const DIRTY_REGION_PADDING = 2;
const FALLBACK_DIRTY_THRESHOLD = 0.65;

export interface IEngineV2RenderContext {
    dirtyRegions: IBoundRectNoAngle[];
}

/**
 * High-performance rendering engine that extends the base Engine with
 * dirty-region tracking and optimized render loop.
 *
 * It keeps 100% API compatibility with Engine while reducing the
 * amount of pixels redrawn each frame.
 */
export class EngineV2 extends Engine {
    private _dirtyRegionManagers = new WeakMap<Scene, DirtyRegionManager>();
    private _activeDirtyRegionsByScene: WeakMap<Scene, IBoundRectNoAngle[]> | null = null;
    private _canvasArea: number = 0;

    constructor(
        unitId?: string,
        options?: IEngineOption,
        @ICanvasColorService override readonly canvasColorService?: ICanvasColorService
    ) {
        super(unitId, options, canvasColorService);
        this._updateCanvasArea();

        // Override the private render function to inject dirty-region optimization.
        const originalRenderFunction = (this as any)._renderFunction.bind(this);
        (this as any)._renderFunction = (timestamp: number) => {
            let shouldRender = true;
            if (!this.renderEvenInBackground) {
                shouldRender = false;
            }

            if (shouldRender) {
                this._beginFrame(timestamp);
                this._renderFrameWithDirtyRegions(timestamp);
                this._endFrame(timestamp);
            }

            const renderFrameTasks = (this as any)._renderFrameTasks as Array<() => void>;
            if (renderFrameTasks.length > 0) {
                (this as any)._requestNewFrameHandler = requestNewFrame((this as any)._renderFunction);
            } else {
                (this as any)._renderingQueueLaunched = false;
            }
        };
    }

    override addScene(sceneInstance: Scene): Scene {
        const scene = super.addScene(sceneInstance);
        if (!this._dirtyRegionManagers.has(scene)) {
            this._dirtyRegionManagers.set(scene, new DirtyRegionManager());
        }
        return scene;
    }

    override resizeBySize(width: number, height: number) {
        super.resizeBySize(width, height);
        this._updateCanvasArea();
    }

    /**
     * Mark a region of a scene as dirty. This region will be re-rendered
     * on the next frame instead of clearing the entire canvas.
     */
    markSceneDirty(scene: Scene, region: IBoundRectNoAngle): void {
        const drm = this._dirtyRegionManagers.get(scene);
        if (drm) {
            drm.addRegion(expandRect(region, DIRTY_REGION_PADDING));
        }
    }

    /**
     * Mark the entire scene as dirty.
     */
    markSceneFullyDirty(scene: Scene): void {
        const drm = this._dirtyRegionManagers.get(scene);
        if (drm) {
            drm.addRegion({
                left: 0,
                top: 0,
                right: this.width,
                bottom: this.height,
            });
        }
    }

    /**
     * Internal method used by Scene/Viewport during the render frame
     * to determine whether dirty-region clipping should be applied.
     */
    _getActiveDirtyRegionsForScene(scene: Scene): IBoundRectNoAngle[] | null {
        return this._activeDirtyRegionsByScene?.get(scene) ?? null;
    }

    private _renderFrameWithDirtyRegions(_timestamp: number) {
        const scenes = Object.values(this.getScenes());
        const sceneDirtyRegions = new WeakMap<Scene, IBoundRectNoAngle[]>();
        let hasDirtyRegions = false;
        let totalDirtyArea = 0;

        for (const scene of scenes) {
            const drm = this._dirtyRegionManagers.get(scene);
            if (drm && drm.hasDirtyRegions()) {
                const merged = drm.getMergedRegions();
                sceneDirtyRegions.set(scene, merged);
                hasDirtyRegions = true;
                for (const r of merged) {
                    totalDirtyArea += (r.right - r.left) * (r.bottom - r.top);
                }
            }
        }

        const shouldUseDirtyRegions = hasDirtyRegions &&
            scenes.length > 0 &&
            totalDirtyArea < this._canvasArea * FALLBACK_DIRTY_THRESHOLD;

        if (shouldUseDirtyRegions) {
            // Pre-clear only the dirty regions on the main canvas.
            const ctx = this.getCanvas().getContext();
            ctx.save();
            for (const [scene, regions] of this._weakMapToEntries(sceneDirtyRegions, scenes)) {
                for (const r of regions) {
                    const intersected = intersectRect(r, {
                        left: 0,
                        top: 0,
                        right: this.width,
                        bottom: this.height,
                    });
                    if (intersected) {
                        ctx.clearRect(
                            intersected.left,
                            intersected.top,
                            intersected.right - intersected.left,
                            intersected.bottom - intersected.top
                        );
                    }
                }
            }
            ctx.restore();

            this._activeDirtyRegionsByScene = sceneDirtyRegions;
        } else if (hasDirtyRegions) {
            // Too much dirty area — do a full clear and full render.
            this.clearCanvas();
            this._activeDirtyRegionsByScene = null;
        } else {
            this._activeDirtyRegionsByScene = null;
        }

        // Execute registered render functions (e.g. scene.render())
        for (let index = 0; index < (this as any)._renderFrameTasks.length; index++) {
            const renderFunction = (this as any)._renderFrameTasks[index];
            renderFunction();
        }

        this._activeDirtyRegionsByScene = null;

        // Clear dirty regions after rendering.
        for (const scene of scenes) {
            this._dirtyRegionManagers.get(scene)?.clear();
        }
    }

    private _updateCanvasArea(): void {
        this._canvasArea = Math.max(1, this.width * this.height);
    }

    private _weakMapToEntries(
        map: WeakMap<Scene, IBoundRectNoAngle[]>,
        scenes: Scene[]
    ): Array<[Scene, IBoundRectNoAngle[]]> {
        const entries: Array<[Scene, IBoundRectNoAngle[]]> = [];
        for (const scene of scenes) {
            const regions = map.get(scene);
            if (regions) {
                entries.push([scene, regions]);
            }
        }
        return entries;
    }
}
