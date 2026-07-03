import {
  UniverActionRecorderPlugin
} from "./chunk-MS6JG3RE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-35C4RJSG.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-4BH7HEZ6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WS6FT6IT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-27UEZLSL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VGAM323M.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QTPPJLYG.js";
import "./chunk-K7DD7HLC.js";
import {
  loadDebuggerLocale
} from "./chunk-HTYW4EHM.js";
import "./chunk-TKGR7A5I.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WS4BZARC.js";
import "./chunk-HX3CAAIY.js";
import "./chunk-BZ2CNRCG.js";
import "./chunk-D2NN3LSL.js";
import "./chunk-N3VRBPRQ.js";
import "./chunk-X7UG55BB.js";
import "./chunk-TXJNVTTA.js";
import "./chunk-BVX7VFBB.js";
import "./chunk-IPGQAMWF.js";
import "./chunk-CLK44Y4Q.js";
import "./chunk-NFP2ERRU.js";
import "./chunk-XXPIJT3B.js";
import "./chunk-P5KDHCJI.js";
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
