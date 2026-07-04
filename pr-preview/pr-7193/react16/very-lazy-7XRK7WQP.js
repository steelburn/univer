import {
  UniverActionRecorderPlugin
} from "./chunk-4KTOG776.js";
import {
  UniverUniscriptPlugin
} from "./chunk-IBSKKVN5.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-P55YNVUG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6C2KPUTG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YR66ZRYD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-N2ISRONM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-T5ZWGSKJ.js";
import "./chunk-SKCFTDAV.js";
import {
  loadDebuggerLocale
} from "./chunk-5HGQNVZF.js";
import "./chunk-7H2KCI36.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-L22P2XDJ.js";
import "./chunk-UWNRN27X.js";
import "./chunk-TJO7D5LV.js";
import "./chunk-BIBCBBJU.js";
import "./chunk-KJYWAHON.js";
import "./chunk-AQXT3JA3.js";
import "./chunk-TN7TFMGX.js";
import "./chunk-2O3VW5NY.js";
import "./chunk-UMKCJXP5.js";
import "./chunk-NEDP32GK.js";
import "./chunk-ZPTY5RQ3.js";
import "./chunk-JS245ZNJ.js";
import "./chunk-3KZPIIDJ.js";
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
