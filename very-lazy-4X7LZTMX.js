import {
  UniverActionRecorderPlugin
} from "./chunk-6R5MEYJH.js";
import {
  UniverUniscriptPlugin
} from "./chunk-2I3BV5YT.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MEKKRCJ2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-G45FL2AW.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UT3QPNA7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VC663V2U.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-YAXIM3JV.js";
import {
  loadDebuggerLocale
} from "./chunk-I52BLRWQ.js";
import "./chunk-MEZYN37C.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TYGJQCA2.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-IXGZUTVM.js";
import "./chunk-OYJGZT7S.js";
import "./chunk-4RI3AED2.js";
import "./chunk-VMW4UVMR.js";
import "./chunk-24TUDJHE.js";
import "./chunk-PDLKZOO7.js";
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
