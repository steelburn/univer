import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-YS4WQDEC.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-ZKOOUDQJ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-EECT4QBM.js";
import "../chunk-YTTBVE7U.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-F77LJMQC.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-6P4JMQYP.js";
import {
  mergeLocales
} from "../chunk-2OKSGSKY.js";
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
