import {
  UniverActionRecorderPlugin
} from "./chunk-ZKOPFJKN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-VTDL3ES6.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-TQ5KXMKH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QOHXK2KV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YRFURHK3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6MUR5732.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LL7EBMUT.js";
import "./chunk-VEMV7TND.js";
import {
  loadDebuggerLocale
} from "./chunk-UJ4POG2F.js";
import "./chunk-SM5TGTKR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XYHI7UJY.js";
import "./chunk-7JS6HMGE.js";
import "./chunk-UDHQTYDE.js";
import "./chunk-V42QMRDN.js";
import "./chunk-XEDPH47T.js";
import "./chunk-ZXFJA52I.js";
import "./chunk-ANAQDJNB.js";
import "./chunk-BTNAS3YE.js";
import "./chunk-DYNPPXJ5.js";
import "./chunk-ZEVVNN57.js";
import "./chunk-YFJR3M5H.js";
import "./chunk-2AX73GH7.js";
import "./chunk-7O3JHHB2.js";
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
