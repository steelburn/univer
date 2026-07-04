import {
  UniverActionRecorderPlugin
} from "./chunk-V4OMMMGW.js";
import {
  UniverUniscriptPlugin
} from "./chunk-EVG5POJ4.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ONJN3I52.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BYUZY6SD.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HJWV2TSV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6LQ6SEXG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DA4FTYEG.js";
import "./chunk-SUZNLREV.js";
import {
  loadDebuggerLocale
} from "./chunk-3T7GBHQT.js";
import "./chunk-BPQI5XQV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7AX7B4NP.js";
import "./chunk-CLIMCZGN.js";
import "./chunk-GIBAD37O.js";
import "./chunk-TP455RKZ.js";
import "./chunk-4HEBP4FB.js";
import "./chunk-FNWQAIAV.js";
import "./chunk-NHEF2VUB.js";
import "./chunk-PXQ54QE4.js";
import "./chunk-2XSA2LC7.js";
import "./chunk-47PYRXT7.js";
import "./chunk-IGOTXBK6.js";
import "./chunk-NTKRGZ6Y.js";
import "./chunk-LCVHUHN7.js";
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
