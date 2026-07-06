import {
  UniverActionRecorderPlugin
} from "./chunk-NXO4JUGQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HMSYQGHP.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-67EHWHHL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BJ6B55WQ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FZB6MFG6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ASFKS6UG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-5SVECR5F.js";
import "./chunk-7LPHGALB.js";
import {
  loadDebuggerLocale
} from "./chunk-ASADV2TL.js";
import "./chunk-CXUA6E5W.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WIUREH7F.js";
import "./chunk-DBSCVVZF.js";
import "./chunk-MDDSISAV.js";
import "./chunk-V5V2TBM2.js";
import "./chunk-S47X7LKL.js";
import "./chunk-VO3VU7DW.js";
import "./chunk-WE43C7WD.js";
import "./chunk-7UIAQ5RJ.js";
import "./chunk-3XVATOG6.js";
import "./chunk-EJ7SRPYX.js";
import "./chunk-7MAGD6AG.js";
import "./chunk-65ZVRLT5.js";
import "./chunk-LM6KX6ET.js";
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
