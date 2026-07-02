import {
  UniverActionRecorderPlugin
} from "./chunk-BJHC3TSZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-Y3TCBLZ7.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Z2A7BUGN.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5T2G2M7C.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QTGVHGY2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5RXLLQWZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-NPPGDXIO.js";
import {
  loadDebuggerLocale
} from "./chunk-772ZZOFA.js";
import "./chunk-4SREX2CE.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-2GZZ32Y6.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-62MBQRPS.js";
import "./chunk-5YHPNAJD.js";
import "./chunk-HCVYW3WN.js";
import "./chunk-VT6VSWAG.js";
import "./chunk-5NAFVRJF.js";
import "./chunk-LIG3MUKA.js";
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
