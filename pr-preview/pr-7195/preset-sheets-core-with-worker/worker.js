import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-EEYRVTRE.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-XIWGWHOE.js";
import "../chunk-2FVEG47S.js";
import "../chunk-US5S5UBD.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-5MHJTTDS.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-X7DAPWNR.js";
import {
  mergeLocales
} from "../chunk-V6KA3GW7.js";
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
