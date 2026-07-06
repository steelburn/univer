import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-IVCVETJK.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-3XVATOG6.js";
import "../chunk-2FVEG47S.js";
import "../chunk-4FBQDXX6.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-7MAGD6AG.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-65ZVRLT5.js";
import {
  mergeLocales
} from "../chunk-LM6KX6ET.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-sheets-core/src/worker.ts
function UniverSheetsCoreWorkerPreset(config = {}) {
  const {
    formula
  } = config;
  return {
    plugins: [
      [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
      [UniverFormulaEnginePlugin, { function: formula == null ? void 0 : formula.function }],
      UniverRPCWorkerThreadPlugin,
      UniverRemoteSheetsFormulaPlugin
    ]
  };
}

// ../presets/packages/preset-sheets-filter/src/worker.ts
function UniverSheetsFilterWorkerPreset() {
  return {
    plugins: [
      UniverSheetsFilterPlugin
    ]
  };
}

// src/preset-sheets-core-with-worker/worker.ts
createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default,
      zh_CN_default2
    )
  },
  presets: [
    UniverSheetsCoreWorkerPreset(),
    UniverSheetsFilterWorkerPreset()
  ]
});
