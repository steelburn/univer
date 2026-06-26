import {
  zh_CN_default
} from "../chunk-2LAJUHX4.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-WRDP6BX6.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-G54VOOXJ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-MAKLEPR2.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-LOT2R2OM.js";
import {
  Univer
} from "../chunk-K4NPP4YC.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
