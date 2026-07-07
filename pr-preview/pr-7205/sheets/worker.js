import {
  zh_CN_default
} from "../chunk-RW443FRL.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-UUXCCQDN.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-YGL77P23.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-UZB6LHUM.js";
import {
  Univer
} from "../chunk-QJESARYQ.js";
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
