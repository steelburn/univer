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

import type { IUniverEngineRenderConfig } from '../config/config';
import { IConfigService, Inject, Injector, merge, Plugin, registerDependencies } from '@univerjs/core';

import pkg from '../../package.json';
import { defaultPluginConfig, ENGINE_RENDER_PLUGIN_CONFIG_KEY } from '../config/config';
import { IRenderingEngine } from '../plugin';
import { IRenderManagerService, RenderManagerService } from '../render-manager/render-manager.service';
import { CanvasColorService, ICanvasColorService } from '../services/canvas-color.service';
import { UniverRenderConfigService } from '../services/render-config.service';
import { EngineV2 } from './engine-v2';

const PLUGIN_NAME = 'UNIVER_RENDER_ENGINE_PLUGIN_V2';

export class UniverRenderEnginePluginV2 extends Plugin {
    static override pluginName = PLUGIN_NAME;
    static override packageName = pkg.name;
    static override version = pkg.version;

    constructor(
        private readonly _config: Partial<IUniverEngineRenderConfig> = defaultPluginConfig,
        @Inject(Injector) override readonly _injector: Injector,
        @IConfigService private readonly _configService: IConfigService
    ) {
        super();

        const { ...rest } = merge(
            {},
            defaultPluginConfig,
            this._config
        );
        this._configService.setConfig(ENGINE_RENDER_PLUGIN_CONFIG_KEY, rest);
    }

    override onStarting(): void {
        registerDependencies(this._injector, [
            [UniverRenderConfigService],
            [ICanvasColorService, { useClass: CanvasColorService }],
            [IRenderingEngine, { useClass: EngineV2 }],
            [IRenderManagerService, { useClass: RenderManagerService }],
        ]);
    }
}
