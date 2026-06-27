import {
  UniverActionRecorderPlugin
} from "./chunk-FBKV3MGV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WOCLPXW5.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BRQTD34G.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GOGMQITQ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PALPWRNK.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LLPGUJWA.js";
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
} from "./chunk-RER4WIKX.js";
import "./chunk-VFBTU3R4.js";
import "./chunk-LBL4PQJH.js";
import "./chunk-HJ27K5PV.js";
import "./chunk-NN5RA2IS.js";
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
