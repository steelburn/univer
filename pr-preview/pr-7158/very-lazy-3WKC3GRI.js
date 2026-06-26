import {
  UniverActionRecorderPlugin
} from "./chunk-UCCTWIQE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-PS3EOX3E.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-S3UFIW5B.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5VGCUMKE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PKGXCI4M.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WUNQMZBH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-WL4HDK3P.js";
import "./chunk-3LZCAMWR.js";
import {
  loadDebuggerLocale
} from "./chunk-GDZIEZ4R.js";
import "./chunk-7OMJMINS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WZJQO2S7.js";
import "./chunk-FTUFSAE3.js";
import "./chunk-2OJD6WGW.js";
import "./chunk-IJ45CVVE.js";
import "./chunk-TW7PBWPG.js";
import "./chunk-H2V6DEOX.js";
import "./chunk-OV5I2EGD.js";
import "./chunk-KXYBSBSD.js";
import "./chunk-T6EDKS5T.js";
import "./chunk-SQB3XKNU.js";
import "./chunk-BRBIZH26.js";
import "./chunk-ZCW3JLGF.js";
import "./chunk-3DN27AFH.js";
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
