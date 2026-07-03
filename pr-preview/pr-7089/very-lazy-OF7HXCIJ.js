import {
  UniverActionRecorderPlugin
} from "./chunk-2NQF4CR5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CB4265OJ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JDPL3PBR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ESG4DGFL.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-KH4OGF5W.js";
import {
  UniverDebuggerPlugin
} from "./chunk-64FUI5EG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QTPPJLYG.js";
import "./chunk-K4R2EFBJ.js";
import {
  loadDebuggerLocale
} from "./chunk-QLJ7OOOB.js";
import "./chunk-TKGR7A5I.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CY5P4PQM.js";
import "./chunk-RJ5ZMPQ6.js";
import "./chunk-KELN34AS.js";
import "./chunk-EXKNWFSF.js";
import "./chunk-QSOVMFUQ.js";
import "./chunk-RDA67HDS.js";
import "./chunk-CRWIVMZJ.js";
import "./chunk-BVX7VFBB.js";
import "./chunk-HITDOKBC.js";
import "./chunk-CLK44Y4Q.js";
import "./chunk-ZJJKBI4V.js";
import "./chunk-CK6DU2KF.js";
import "./chunk-P5KDHCJI.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
