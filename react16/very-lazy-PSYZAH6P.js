import {
  UniverActionRecorderPlugin
} from "./chunk-HEC4U26A.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KLYQHTQX.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EDPYOOAG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-43UWPUKX.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UFY3CH25.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VH7XZ7TM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KSNIJ25R.js";
import "./chunk-CA3OCVJF.js";
import {
  loadDebuggerLocale
} from "./chunk-CRHH5C62.js";
import "./chunk-NUMPGE4X.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-R2CTOE6F.js";
import "./chunk-6S7LJOUF.js";
import "./chunk-V66IWQEN.js";
import "./chunk-YYEWPWXS.js";
import "./chunk-7M4O4HS2.js";
import "./chunk-U2VZ5U2H.js";
import "./chunk-3MZA2Q3T.js";
import "./chunk-4ITOEFIV.js";
import "./chunk-KCGNZNPA.js";
import "./chunk-7P52LSCI.js";
import "./chunk-W2VNWHHA.js";
import "./chunk-NB2AU774.js";
import "./chunk-CJNKPU2H.js";
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
