import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-NOA5MEIF.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-2XSA2LC7.js";
import "../chunk-2FVEG47S.js";
import "../chunk-47PYRXT7.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-IGOTXBK6.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-NTKRGZ6Y.js";
import {
  mergeLocales
} from "../chunk-LCVHUHN7.js";
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
