import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-GQUCUDLC.js";
import {
  createUniver
} from "../chunk-FPAQ3IWY.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-DYNPPXJ5.js";
import "../chunk-2FVEG47S.js";
import "../chunk-ZEVVNN57.js";
import "../chunk-2236G4QD.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-YFJR3M5H.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-2AX73GH7.js";
import {
  mergeLocales
} from "../chunk-7O3JHHB2.js";
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
