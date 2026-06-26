import {
  UniverActionRecorderPlugin
} from "./chunk-6O5WXGBF.js";
import {
  UniverUniscriptPlugin
} from "./chunk-U5G7BBPJ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BQOVS3UD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KSOG6CJF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XWT3LL6G.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YTMRUXOV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-XMZRHB3U.js";
import "./chunk-QLDLXFL6.js";
import {
  loadDebuggerLocale
} from "./chunk-5UW7MU4X.js";
import "./chunk-VW44BBHM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NSYZKFDG.js";
import "./chunk-OJROURM7.js";
import "./chunk-U55D2QLV.js";
import "./chunk-6TQNZ5CE.js";
import "./chunk-LKDUJWDQ.js";
import "./chunk-6BRE7BU4.js";
import "./chunk-WZAAH4KX.js";
import "./chunk-WATNN632.js";
import "./chunk-G54VOOXJ.js";
import "./chunk-7FCCOEOP.js";
import "./chunk-MAKLEPR2.js";
import "./chunk-LOT2R2OM.js";
import "./chunk-K4NPP4YC.js";
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
