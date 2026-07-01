import {
  UniverActionRecorderPlugin
} from "./chunk-PELLKR36.js";
import {
  UniverUniscriptPlugin
} from "./chunk-EKI5WPOT.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QEYIHBBX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Y7EFCBVO.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-TQUQZ6VQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YYHHPDTN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MMSETCV3.js";
import "./chunk-XSCNFIQE.js";
import {
  loadDebuggerLocale
} from "./chunk-I7ARNDHH.js";
import "./chunk-QYRZCRUN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3HJKYIMU.js";
import "./chunk-NKSRF3PJ.js";
import "./chunk-C6F4SNOR.js";
import "./chunk-B7Y55ADG.js";
import "./chunk-RTHKTSDC.js";
import "./chunk-UM4NOZER.js";
import "./chunk-YVVQNTTI.js";
import "./chunk-HRNSATQF.js";
import "./chunk-ZYQWQPP7.js";
import "./chunk-FGDU2BZX.js";
import "./chunk-UQCVZIYI.js";
import "./chunk-OILB55V4.js";
import "./chunk-AQVHF73V.js";
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
