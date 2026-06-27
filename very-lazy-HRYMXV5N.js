import {
  UniverActionRecorderPlugin
} from "./chunk-SGES7YUG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QAF7DHTF.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6SBXKWFC.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LZZCVPQT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7IJU2XKB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GP3KS4WP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SKAEQFRL.js";
import "./chunk-7NYRPGH5.js";
import {
  loadDebuggerLocale
} from "./chunk-AJL5HSLU.js";
import "./chunk-QSAB65NY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DCYGWSIN.js";
import "./chunk-Y4YKRG2S.js";
import "./chunk-LSGVOUI4.js";
import "./chunk-SAGL4BN6.js";
import "./chunk-L34UUFNM.js";
import "./chunk-L4S74WID.js";
import "./chunk-M5GVC7ON.js";
import "./chunk-ANUQL4BY.js";
import "./chunk-NG4STN57.js";
import "./chunk-BICC77UV.js";
import "./chunk-SAPNNB2H.js";
import "./chunk-QKZFJOI6.js";
import "./chunk-NMSWDVJS.js";
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
