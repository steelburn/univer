import {
  UniverActionRecorderPlugin
} from "./chunk-2H7A7RQ7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FSEKOYSN.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CU57RGSF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QLNXHS5A.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-J5SA7GJP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RH5QG5WQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-5SVECR5F.js";
import "./chunk-NBVV4A5F.js";
import {
  loadDebuggerLocale
} from "./chunk-CV2QXV6F.js";
import "./chunk-Q6VEOKGU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A6X46SXO.js";
import "./chunk-DBSCVVZF.js";
import "./chunk-IB6Y2QQ6.js";
import "./chunk-TYGMEEC6.js";
import "./chunk-RJHUXOPM.js";
import "./chunk-OQX723RW.js";
import "./chunk-5CJN4YVY.js";
import "./chunk-IDMEHA7N.js";
import "./chunk-3XVATOG6.js";
import "./chunk-EJ7SRPYX.js";
import "./chunk-7MAGD6AG.js";
import "./chunk-65ZVRLT5.js";
import "./chunk-LM6KX6ET.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/very-lazy.ts
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
