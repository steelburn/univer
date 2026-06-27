import {
  UniverActionRecorderPlugin
} from "./chunk-UGTAYCH6.js";
import {
  UniverUniscriptPlugin
} from "./chunk-TLZYBWSC.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BMUXQTYW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-4Z5XCGQN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ASO6N5L4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RYKW4A7Y.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MMSETCV3.js";
import "./chunk-GRFEFZOT.js";
import {
  loadDebuggerLocale
} from "./chunk-PIT7SCDY.js";
import "./chunk-QYRZCRUN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YJKAL4VB.js";
import "./chunk-VFBTU3R4.js";
import "./chunk-VTB53UC4.js";
import "./chunk-7QG7N2FI.js";
import "./chunk-K7GTW7JU.js";
import "./chunk-PDVUKZV5.js";
import "./chunk-QK3SKOCN.js";
import "./chunk-HRNSATQF.js";
import "./chunk-GCAVSOIP.js";
import "./chunk-FGDU2BZX.js";
import "./chunk-AARVXHF2.js";
import "./chunk-ZGHCBBJ6.js";
import "./chunk-AQVHF73V.js";
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
