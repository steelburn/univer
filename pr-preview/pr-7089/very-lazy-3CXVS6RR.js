import {
  UniverActionRecorderPlugin
} from "./chunk-5FWYYWK7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-76SPAJLR.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-F32JZA2Q.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OJTXC2CC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-MEQ7NDNL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3BGJLESC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-L6FO2W7P.js";
import "./chunk-VPPXP7MB.js";
import {
  loadDebuggerLocale
} from "./chunk-ZYQIRO7Z.js";
import "./chunk-TXW4LHIV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TFJLTCEQ.js";
import "./chunk-CU3K7KBA.js";
import "./chunk-4SAJOLD5.js";
import "./chunk-D3W4XGYC.js";
import "./chunk-N4GYHX32.js";
import "./chunk-EO4JTPVV.js";
import "./chunk-NNYXIEMR.js";
import "./chunk-5RNYM7UN.js";
import "./chunk-UYLUETOS.js";
import "./chunk-KXR54EPN.js";
import "./chunk-VVSBXURV.js";
import "./chunk-2FMDUAYC.js";
import "./chunk-UGNHOIG6.js";
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
