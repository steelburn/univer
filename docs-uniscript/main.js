import {
  UniverUniscriptPlugin
} from "../chunk-HNM6Z34S.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  zh_CN_default
} from "../chunk-LMLFG63V.js";
import "../chunk-DBRQB4K6.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-HJ6ZLNK4.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-RLE4C275.js";
import "../chunk-IMWY7PB3.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-KQ47BPYS.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-52K35IRO.js";
import "../chunk-LOQW54LO.js";
import "../chunk-UOKTNN4A.js";
import "../chunk-2236G4QD.js";
import "../chunk-XVN2R7WE.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-OWP74SHF.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-SRJPNYWR.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/docs-uniscript/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
