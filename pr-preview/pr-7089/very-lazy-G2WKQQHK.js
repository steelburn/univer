import {
  UniverActionRecorderPlugin
} from "./chunk-NOWPQNHK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WE6JO2LW.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MFZAPLMY.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7W525JHZ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GS6S6FAZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EHXGXKFB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-J7NXJW2W.js";
import "./chunk-ETSGQLAE.js";
import {
  loadDebuggerLocale
} from "./chunk-DELWERXH.js";
import "./chunk-LEDWXXDX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WAGATVFL.js";
import "./chunk-5KGCGXNI.js";
import "./chunk-CZY73HJO.js";
import "./chunk-IQENMDCM.js";
import "./chunk-JDHBA3JI.js";
import "./chunk-WN43UG3C.js";
import "./chunk-PCKQZKEB.js";
import "./chunk-KAOBDX34.js";
import "./chunk-VOQNCJT4.js";
import "./chunk-RBL4FSUX.js";
import "./chunk-3WUY5WXU.js";
import "./chunk-YIWQ4VME.js";
import "./chunk-QPAXVCAC.js";
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
