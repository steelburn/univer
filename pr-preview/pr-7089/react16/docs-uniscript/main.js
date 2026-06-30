import {
  UniverUniscriptPlugin
} from "../chunk-OO46QSOC.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  zh_CN_default
} from "../chunk-PLO6OHDI.js";
import "../chunk-DBRQB4K6.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-JP27NK3I.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-D3FNGKGK.js";
import "../chunk-O4CRIMVC.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-G4ASLNLH.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NHSJ25AF.js";
import "../chunk-2FVEG47S.js";
import "../chunk-SYN5MVMC.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-HFTONCIN.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-XANA7DTY.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-IOKMYXS7.js";
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
