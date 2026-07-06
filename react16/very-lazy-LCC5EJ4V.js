import {
  UniverActionRecorderPlugin
} from "./chunk-2F2VYYLN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KMLCLLG7.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-H2LLWVFR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-THLOZGOD.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-B67A5FEQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-P5FW6G2U.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AUVVHWQQ.js";
import "./chunk-ML2SST23.js";
import {
  loadDebuggerLocale
} from "./chunk-SFWBLHTG.js";
import "./chunk-TUONPMFV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TMYCNBIB.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-HUMEXQTA.js";
import "./chunk-C7M7P6HE.js";
import "./chunk-OUXUBCXX.js";
import "./chunk-XY3HBZFM.js";
import "./chunk-X3B5WOQX.js";
import "./chunk-DLEWTMBN.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-FNWLVP5P.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
