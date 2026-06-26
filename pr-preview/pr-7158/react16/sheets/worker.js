import {
  zh_CN_default
} from "../chunk-2LAJUHX4.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-WRDP6BX6.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-5PGZ3OJP.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-TPXMXN3W.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-SZ5VZFJQ.js";
import {
  Univer
} from "../chunk-MLIP4D3Q.js";
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
