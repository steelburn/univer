import {
  UniverActionRecorderPlugin
} from "./chunk-YGZP7QQE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-EWX7WU7I.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FHMIDJAP.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WD37TZZA.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ID2RMUEN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XCWH3DZI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3ZIH2AQF.js";
import "./chunk-CC4RSUIZ.js";
import {
  loadDebuggerLocale
} from "./chunk-E5VQCT4G.js";
import "./chunk-W3DOGBPQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IM3IHWG4.js";
import "./chunk-XK57WKI5.js";
import "./chunk-JLSL4GMX.js";
import "./chunk-AQCG22LR.js";
import "./chunk-CS3UAARQ.js";
import "./chunk-QCOUDG7P.js";
import "./chunk-YI2R2YWL.js";
import "./chunk-3HUGWSDP.js";
import "./chunk-6W76PZHA.js";
import "./chunk-CPTZZXPY.js";
import "./chunk-3NID2K3K.js";
import "./chunk-EMXII5U6.js";
import "./chunk-6F7TJWHX.js";
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
