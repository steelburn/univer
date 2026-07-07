import {
  UniverUniscriptPlugin
} from "../chunk-6LR7CE5N.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  zh_CN_default
} from "../chunk-RW443FRL.js";
import "../chunk-DBRQB4K6.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-2QLJP2FS.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-XVYLP3GF.js";
import "../chunk-O4CRIMVC.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UYAWZQ7D.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-K7QVM4VQ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-XRSVWX6F.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-YGL77P23.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-UZB6LHUM.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-QJESARYQ.js";
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
