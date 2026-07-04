import {
  UniverActionRecorderPlugin
} from "./chunk-IPDGEO7H.js";
import {
  UniverUniscriptPlugin
} from "./chunk-PEK4CSWM.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LQJQ2NFO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-P6QXEQCE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JEGJ2DNW.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NEEELRLP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-ZKROM37P.js";
import {
  loadDebuggerLocale
} from "./chunk-S4SZIE7O.js";
import "./chunk-Y2OBHAJD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TTA6IAUN.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-D3CBTXIH.js";
import "./chunk-6N5TNMON.js";
import "./chunk-JYKXSWJ7.js";
import "./chunk-WQZ3L4BY.js";
import "./chunk-6XRFVVQQ.js";
import "./chunk-VQWC57KJ.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-GVT4D57Q.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
