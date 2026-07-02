import {
  UniverActionRecorderPlugin
} from "./chunk-N4OH522N.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OIY5KIKU.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6BWGX4X3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZZJAZMKN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SCM32AUV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MJSCV5ZS.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2WOCRTT4.js";
import "./chunk-MD5K7P5T.js";
import {
  loadDebuggerLocale
} from "./chunk-PCC6OE55.js";
import "./chunk-XSOX5HRX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XOG2FXSC.js";
import "./chunk-QW266UJ5.js";
import "./chunk-6WTSA2HN.js";
import "./chunk-DHDDXST2.js";
import "./chunk-F46TSK5L.js";
import "./chunk-QJ2KMZRK.js";
import "./chunk-S4C336VJ.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-QBYSMQUM.js";
import "./chunk-5K7IENYW.js";
import "./chunk-3JTM5TRL.js";
import "./chunk-6ZMAA6SO.js";
import "./chunk-AM2UDTII.js";
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
