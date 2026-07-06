import {
  UniverActionRecorderPlugin
} from "./chunk-YZMEJ5QK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YRI7ONGO.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KTRCVP72.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-B2RGBGY3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-CY3IVB7C.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XA7P2QMK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AUVVHWQQ.js";
import "./chunk-EV362KFZ.js";
import {
  loadDebuggerLocale
} from "./chunk-KTEQ7ZII.js";
import "./chunk-GKOY2WBM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WDM2EHEO.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-NFXH7ZDZ.js";
import "./chunk-PRI47MVV.js";
import "./chunk-CPZG2275.js";
import "./chunk-N3CSWUWX.js";
import "./chunk-HQ5A2ZNX.js";
import "./chunk-U6AYUUE2.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-FNWLVP5P.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
