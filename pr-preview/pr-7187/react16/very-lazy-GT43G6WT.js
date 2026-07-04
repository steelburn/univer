import {
  UniverActionRecorderPlugin
} from "./chunk-HAXSBXAE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-VJ35TB3R.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-45TTLUAR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-EECKJHVH.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-43YEQ7HB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UH6722WE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SDAVB62P.js";
import "./chunk-JJPKX3DU.js";
import {
  loadDebuggerLocale
} from "./chunk-K6W2GKRK.js";
import "./chunk-6IG4XKCI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RVNGUYVE.js";
import "./chunk-7DRE6BXR.js";
import "./chunk-RRFTDJHZ.js";
import "./chunk-EE3KPUWO.js";
import "./chunk-3KKLHCVI.js";
import "./chunk-A6OGKKA2.js";
import "./chunk-FEXAVOZ3.js";
import "./chunk-LKR2FF62.js";
import "./chunk-3DCU674G.js";
import "./chunk-OPIJVDZV.js";
import "./chunk-Z22NX2ZN.js";
import "./chunk-NHJ5OXWA.js";
import "./chunk-UVVCF4V5.js";
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
