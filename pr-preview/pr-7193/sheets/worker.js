import {
  zh_CN_default
} from "../chunk-2LAJUHX4.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-WRDP6BX6.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-2XSA2LC7.js";
import "../chunk-2FVEG47S.js";
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
  Univer
} from "../chunk-LCVHUHN7.js";
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
