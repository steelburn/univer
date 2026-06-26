import {
  UniverActionRecorderPlugin
} from "./chunk-G2D4D4HH.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KXHTGH4I.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BEIJHUBM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PSLGNFN5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6L6TXGBG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UWV6ELDI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LL7EBMUT.js";
import "./chunk-BTTT7BMX.js";
import {
  loadDebuggerLocale
} from "./chunk-RJAY6GMH.js";
import "./chunk-G6CHMWQ6.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GRNIVBPW.js";
import "./chunk-7JS6HMGE.js";
import "./chunk-XQ6JLOU3.js";
import "./chunk-6NSQXSKK.js";
import "./chunk-ZS7KM35R.js";
import "./chunk-TNLKB7MZ.js";
import "./chunk-ZBJIKGFI.js";
import "./chunk-CUCEPQQK.js";
import "./chunk-DYNPPXJ5.js";
import "./chunk-ZEVVNN57.js";
import "./chunk-YFJR3M5H.js";
import "./chunk-2AX73GH7.js";
import "./chunk-7O3JHHB2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
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
