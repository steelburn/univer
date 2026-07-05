import {
  UniverActionRecorderPlugin
} from "./chunk-2OW2NNNE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-AJHGW23S.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-TDPZZ5ZD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CTU7ZRBZ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-26XMVOLD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BE35TSFR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q6X2N7NZ.js";
import "./chunk-J4LBY2MO.js";
import {
  loadDebuggerLocale
} from "./chunk-XNOE4HCE.js";
import "./chunk-X7PDM42A.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BT62G6DI.js";
import "./chunk-SBAKQZSC.js";
import "./chunk-F7S5364W.js";
import "./chunk-ODKGBHC3.js";
import "./chunk-7YVWBIMO.js";
import "./chunk-F735FFDE.js";
import "./chunk-IOJMGGMS.js";
import "./chunk-MEUEE4XB.js";
import "./chunk-XIWGWHOE.js";
import "./chunk-US5S5UBD.js";
import "./chunk-5MHJTTDS.js";
import "./chunk-X7DAPWNR.js";
import "./chunk-V6KA3GW7.js";
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
