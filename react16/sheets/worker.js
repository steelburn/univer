import {
  UniverSheetsFilterPlugin
} from "../chunk-EIAWKFP7.js";
import {
  zh_CN_default
} from "../chunk-IPDBHQ7H.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-JPAQCREO.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-E7MFA523.js";
import "../chunk-XDSNGS3M.js";
import {
  Univer
} from "../chunk-JD4X33BA.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

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
