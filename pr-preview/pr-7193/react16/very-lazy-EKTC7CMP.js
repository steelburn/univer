import {
  UniverActionRecorderPlugin
} from "./chunk-UQ7KIP5X.js";
import {
  UniverUniscriptPlugin
} from "./chunk-GCFA7WPL.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PCUYGAB7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-IJCYXOTU.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-R4G7GET2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WOVWJETD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-WGAMP5D4.js";
import "./chunk-SNBNWI6M.js";
import {
  loadDebuggerLocale
} from "./chunk-3QFV2HRE.js";
import "./chunk-KU2DSEN5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-J3KBQHWD.js";
import "./chunk-HRUJYZFA.js";
import "./chunk-4GPSW7WW.js";
import "./chunk-WKMXKJ4U.js";
import "./chunk-TMXBBFQG.js";
import "./chunk-EGY4MQGY.js";
import "./chunk-HVYBSRJX.js";
import "./chunk-7CLHRL5D.js";
import "./chunk-3ONFBMGU.js";
import "./chunk-22FIWLI4.js";
import "./chunk-4YRUDHBP.js";
import "./chunk-VZRP7WSK.js";
import "./chunk-NQFT3NIL.js";
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
