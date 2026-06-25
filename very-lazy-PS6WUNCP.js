import {
  UniverActionRecorderPlugin
} from "./chunk-FPENSAPI.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HNM6Z34S.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-S3MZR267.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DUVTFZJZ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-G6J3KZAN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SQ6NKRQL.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4V2NTLE4.js";
import "./chunk-NOVBCYM6.js";
import {
  loadDebuggerLocale
} from "./chunk-HJ6ZLNK4.js";
import "./chunk-LYDKTBYA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LL5NGKFI.js";
import "./chunk-L552B7LR.js";
import "./chunk-4WP226ZZ.js";
import "./chunk-UH7434UG.js";
import "./chunk-RLE4C275.js";
import "./chunk-XRC27V2R.js";
import "./chunk-KQ47BPYS.js";
import "./chunk-52K35IRO.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-UOKTNN4A.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
