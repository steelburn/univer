import {
  UniverActionRecorderPlugin
} from "./chunk-I7XDGG5L.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RN7RVQ2O.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-K6CX3TJ7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-XBHOXYC6.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-I5SRBZJ5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LT7YCYWR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-RZXFEOAY.js";
import "./chunk-4VSUED6E.js";
import {
  loadDebuggerLocale
} from "./chunk-WHCKGVWJ.js";
import "./chunk-JFWMCIPR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-S22F2O2B.js";
import "./chunk-TSMXMGFP.js";
import "./chunk-DRRIPBLC.js";
import "./chunk-LW7LBYJO.js";
import "./chunk-F2JOBDCT.js";
import "./chunk-OICIWUWS.js";
import "./chunk-6TGWV6KC.js";
import "./chunk-OMMCBRCS.js";
import "./chunk-WNULU2PR.js";
import "./chunk-5S33VJ76.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
