import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-VGFAHMIX.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-7OKPYA37.js";
import "../chunk-2FVEG47S.js";
import "../chunk-LDR5HMSP.js";
import "../chunk-YTTBVE7U.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-IPR36F56.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-P3BUXCOC.js";
import {
  mergeLocales
} from "../chunk-B4VGFPLO.js";
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
