import {
  zh_CN_default
} from "../chunk-LMLFG63V.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-WRDP6BX6.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-QL5ENDFG.js";
import "../chunk-LOQW54LO.js";
import "../chunk-2236G4QD.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-XVN2R7WE.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-OWP74SHF.js";
import {
  Univer
} from "../chunk-SRJPNYWR.js";
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
