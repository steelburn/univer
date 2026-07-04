import {
  UniverActionRecorderPlugin
} from "./chunk-ITDQMIE4.js";
import {
  UniverUniscriptPlugin
} from "./chunk-QG5YXFG2.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CBQJ7TXU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FM3S5RH2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-L3V5722D.js";
import {
  UniverDebuggerPlugin
} from "./chunk-OYTAJAU4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-47TY4KXZ.js";
import {
  loadDebuggerLocale
} from "./chunk-NSV7L22H.js";
import "./chunk-BIBXVXKB.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VSR34ECN.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-Q3X7QL2O.js";
import "./chunk-Z7YQZCS6.js";
import "./chunk-LI23HGOI.js";
import "./chunk-ESKDIVAU.js";
import "./chunk-3IOKGTT7.js";
import "./chunk-MY64UXZ6.js";
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
