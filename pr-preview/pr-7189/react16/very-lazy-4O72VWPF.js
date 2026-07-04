import {
  UniverActionRecorderPlugin
} from "./chunk-P6OXSSGA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-4WKMFZKS.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QM5T2JNI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Z5GBJ7TI.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RVXZKTES.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4R6QULMK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-OGC3UKD7.js";
import {
  loadDebuggerLocale
} from "./chunk-5DFNEXIG.js";
import "./chunk-A425ATHA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WQSOIT3W.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-IEAKB736.js";
import "./chunk-ZDUZUE45.js";
import "./chunk-DH5ZIZJN.js";
import "./chunk-M2TXX5HG.js";
import "./chunk-5BU6S7D4.js";
import "./chunk-NHEJO5CP.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-GVT4D57Q.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
