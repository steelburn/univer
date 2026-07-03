import {
  UniverActionRecorderPlugin
} from "./chunk-OHTCR3RV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BH3MXVSE.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FBGSDCGF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6YSGUKI3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-O2F5S2LX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HK5QAPLO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-QP2MXPCG.js";
import {
  loadDebuggerLocale
} from "./chunk-CTEGABF2.js";
import "./chunk-3ITIODOR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5FFKDQ3P.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-7333WJQZ.js";
import "./chunk-R5ROZDVG.js";
import "./chunk-HE5S6ZI6.js";
import "./chunk-QIHEWUMB.js";
import "./chunk-OSRB4DA7.js";
import "./chunk-7FAIONDU.js";
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
