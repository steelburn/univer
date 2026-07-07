import {
  UniverActionRecorderPlugin
} from "./chunk-SONGWV65.js";
import {
  UniverUniscriptPlugin
} from "./chunk-Q6P6J5OP.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2DVTY6QR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-S6DXAPUT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-U4ERQANS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ETO43X5Y.js";
import {
  UniverWatermarkPlugin
} from "./chunk-J7NXJW2W.js";
import "./chunk-CCFBJZ6D.js";
import {
  loadDebuggerLocale
} from "./chunk-C742WVOX.js";
import "./chunk-LEDWXXDX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ODRD5KW4.js";
import "./chunk-5KGCGXNI.js";
import "./chunk-P3LVN2VS.js";
import "./chunk-5UVQ6OII.js";
import "./chunk-A4MPPH5A.js";
import "./chunk-F4HTKBLM.js";
import "./chunk-UEVG3UZ4.js";
import "./chunk-KAOBDX34.js";
import "./chunk-VOQNCJT4.js";
import "./chunk-RBL4FSUX.js";
import "./chunk-3WUY5WXU.js";
import "./chunk-YIWQ4VME.js";
import "./chunk-QPAXVCAC.js";
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
