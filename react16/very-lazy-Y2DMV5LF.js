import {
  UniverActionRecorderPlugin
} from "./chunk-PTEJXLL6.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ORWBRWCZ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SSHRXPHJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QYVYZFQ2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NYNFNGE7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-U3VJVQB2.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-2PLNZF43.js";
import {
  loadDebuggerLocale
} from "./chunk-4Y6GUTJK.js";
import "./chunk-4SREX2CE.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ATKMNU2I.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-76HRO4WL.js";
import "./chunk-2PINCHST.js";
import "./chunk-MTZKB6MX.js";
import "./chunk-XNWWFZB2.js";
import "./chunk-VQAEIINW.js";
import "./chunk-LIG3MUKA.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-GVT4D57Q.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
