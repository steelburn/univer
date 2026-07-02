import {
  UniverActionRecorderPlugin
} from "./chunk-VMR7M2HP.js";
import {
  UniverUniscriptPlugin
} from "./chunk-K5MP66PK.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XPKXN5Z5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QVTGQBIC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-M5FMZZ47.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5BMVMB2B.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2WOCRTT4.js";
import "./chunk-YZORBBHC.js";
import {
  loadDebuggerLocale
} from "./chunk-YJJ3ZDTJ.js";
import "./chunk-XSOX5HRX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3OBHG4GZ.js";
import "./chunk-LLWLDPCD.js";
import "./chunk-FVXS3NDV.js";
import "./chunk-4K3FZAUD.js";
import "./chunk-65RQLEP2.js";
import "./chunk-JKMQOKXV.js";
import "./chunk-LENITDPL.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-WMKYTCYP.js";
import "./chunk-5K7IENYW.js";
import "./chunk-4ZVILBEQ.js";
import "./chunk-PD2XMV4N.js";
import "./chunk-AM2UDTII.js";
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
