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

const MAX_DIRTY_REGIONS = 8;
const MERGE_THRESHOLD_RATIO = 0.3;

export class DirtyRegionManager {
    private _regions: IBoundRectNoAngle[] = [];

    addRegion(region: IBoundRectNoAngle): void {
        this._regions.push({ ...region });
        this._mergeIfNeeded();
    }

    addRegions(regions: IBoundRectNoAngle[]): void {
        for (const region of regions) {
            this._regions.push({ ...region });
        }
        this._mergeIfNeeded();
    }

    clear(): void {
        this._regions.length = 0;
    }

    hasDirtyRegions(): boolean {
        return this._regions.length > 0;
    }

    getRegions(): ReadonlyArray<IBoundRectNoAngle> {
        return this._regions;
    }

    getMergedRegions(): IBoundRectNoAngle[] {
        if (this._regions.length <= 1) {
            return this._regions.map((r) => ({ ...r }));
        }

        const merged: IBoundRectNoAngle[] = [];
        const pending = this._regions.map((r) => ({ ...r }));

        while (pending.length > 0) {
            let current = pending.shift()!;
            let didMerge = true;

            while (didMerge) {
                didMerge = false;
                for (let i = pending.length - 1; i >= 0; i--) {
                    const other = pending[i];
                    if (_isRectIntersectOrAdjacent(current, other)) {
                        current = _mergeTwoRects(current, other);
                        pending.splice(i, 1);
                        didMerge = true;
                    }
                }
            }

            merged.push(current);
        }

        return merged;
    }

    getTotalArea(): number {
        return this._regions.reduce((area, r) => area + (r.right - r.left) * (r.bottom - r.top), 0);
    }

    private _mergeIfNeeded(): void {
        if (this._regions.length <= MAX_DIRTY_REGIONS) {
            return;
        }

        // Aggressive merge: keep merging the pair with smallest combined area increase
        // until we're under the threshold.
        const rects = this._regions.map((r) => ({ ...r }));

        while (rects.length > MAX_DIRTY_REGIONS) {
            let bestI = -1;
            let bestJ = -1;
            let bestArea = Infinity;

            for (let i = 0; i < rects.length; i++) {
                for (let j = i + 1; j < rects.length; j++) {
                    const merged = _mergeTwoRects(rects[i], rects[j]);
                    const area = (merged.right - merged.left) * (merged.bottom - merged.top);
                    if (area < bestArea) {
                        bestArea = area;
                        bestI = i;
                        bestJ = j;
                    }
                }
            }

            if (bestI >= 0 && bestJ >= 0) {
                const merged = _mergeTwoRects(rects[bestI], rects[bestJ]);
                rects.splice(Math.max(bestI, bestJ), 1);
                rects.splice(Math.min(bestI, bestJ), 1);
                rects.push(merged);
            } else {
                break;
            }
        }

        this._regions = rects;
    }
}

function _isRectIntersectOrAdjacent(a: IBoundRectNoAngle, b: IBoundRectNoAngle): boolean {
    return !(
        a.left > b.right ||
        a.right < b.left ||
        a.top > b.bottom ||
        a.bottom < b.top
    );
}

function _mergeTwoRects(a: IBoundRectNoAngle, b: IBoundRectNoAngle): IBoundRectNoAngle {
    return {
        left: Math.min(a.left, b.left),
        top: Math.min(a.top, b.top),
        right: Math.max(a.right, b.right),
        bottom: Math.max(a.bottom, b.bottom),
    };
}

export function expandRect(rect: IBoundRectNoAngle, padding: number): IBoundRectNoAngle {
    return {
        left: rect.left - padding,
        top: rect.top - padding,
        right: rect.right + padding,
        bottom: rect.bottom + padding,
    };
}

export function intersectRect(a: IBoundRectNoAngle, b: IBoundRectNoAngle): IBoundRectNoAngle | null {
    const left = Math.max(a.left, b.left);
    const top = Math.max(a.top, b.top);
    const right = Math.min(a.right, b.right);
    const bottom = Math.min(a.bottom, b.bottom);

    if (left >= right || top >= bottom) {
        return null;
    }

    return { left, top, right, bottom };
}
