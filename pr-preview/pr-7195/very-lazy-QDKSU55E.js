import {
  UniverActionRecorderPlugin
} from "./chunk-GVL34NUY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-7GMUWTJQ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7SAB6VY4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-R24ABH7M.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BVWKT4FU.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LROCGMRL.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q6X2N7NZ.js";
import "./chunk-KMXQRECN.js";
import {
  loadDebuggerLocale
} from "./chunk-QGUWVD5K.js";
import "./chunk-X7PDM42A.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UXZRY7K5.js";
import "./chunk-SBAKQZSC.js";
import "./chunk-AB2ASX4N.js";
import "./chunk-XMZGDVTQ.js";
import "./chunk-TIEX6CJH.js";
import "./chunk-IZ46N3AS.js";
import "./chunk-RZPW4CGI.js";
import "./chunk-MEUEE4XB.js";
import "./chunk-XIWGWHOE.js";
import "./chunk-US5S5UBD.js";
import "./chunk-5MHJTTDS.js";
import "./chunk-X7DAPWNR.js";
import "./chunk-V6KA3GW7.js";
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
