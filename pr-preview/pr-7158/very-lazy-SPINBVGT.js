import {
  UniverActionRecorderPlugin
} from "./chunk-CXSRTTJK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QNSIU5H2.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-O6BDLWEZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FBT43C2V.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JPV4FFCR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5XBH5N6B.js";
import {
  UniverWatermarkPlugin
} from "./chunk-R7JMNSZ5.js";
import "./chunk-T6PWQ5IE.js";
import {
  loadDebuggerLocale
} from "./chunk-BD6DCNSI.js";
import "./chunk-WIILU2S2.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VNK7H47K.js";
import "./chunk-WXPPSNAL.js";
import "./chunk-EISAZCUD.js";
import "./chunk-YNXSA36Q.js";
import "./chunk-UGYUBKCY.js";
import "./chunk-STCQE6Z4.js";
import "./chunk-EITKUHJA.js";
import "./chunk-QFN5BPXT.js";
import "./chunk-Z7BTC3XM.js";
import "./chunk-FVHQND5F.js";
import "./chunk-4YXP2MPR.js";
import "./chunk-Y6A4QOBR.js";
import "./chunk-FBCWWWX3.js";
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
