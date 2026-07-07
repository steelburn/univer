import {
  UniverActionRecorderPlugin
} from "./chunk-UZEH37HQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-6LR7CE5N.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-73QZSWVQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-SGXZDTSE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VM2KVEDB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SS3OPKIN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PXNCLMC7.js";
import "./chunk-E6XF33KB.js";
import {
  loadDebuggerLocale
} from "./chunk-2QLJP2FS.js";
import "./chunk-PKUCA2TV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XBIECRT6.js";
import "./chunk-6SJSSRNL.js";
import "./chunk-WW4LPWLF.js";
import "./chunk-JJUIGY5K.js";
import "./chunk-XVYLP3GF.js";
import "./chunk-PXHBEZNC.js";
import "./chunk-UYAWZQ7D.js";
import "./chunk-K7QVM4VQ.js";
import "./chunk-UUXCCQDN.js";
import "./chunk-XRSVWX6F.js";
import "./chunk-YGL77P23.js";
import "./chunk-UZB6LHUM.js";
import "./chunk-QJESARYQ.js";
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
