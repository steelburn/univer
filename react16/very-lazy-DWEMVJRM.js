import {
  UniverActionRecorderPlugin
} from "./chunk-UDSHRM2K.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WUU4SBHK.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VOHKTOR2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-K3EJZOWH.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-S7EDXPFH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CCPZZUCD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AUVVHWQQ.js";
import "./chunk-UJZ2DR2D.js";
import {
  loadDebuggerLocale
} from "./chunk-S5GBKS7N.js";
import "./chunk-EOVR3T2I.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-37N7AXT2.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-NHAWPOVP.js";
import "./chunk-3RGJMY5E.js";
import "./chunk-7XIUGZCV.js";
import "./chunk-VOWOKVZU.js";
import "./chunk-YAMWJSB5.js";
import "./chunk-72V6NIU2.js";
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
