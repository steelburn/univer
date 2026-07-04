import {
  UniverActionRecorderPlugin
} from "./chunk-UKCOYF2N.js";
import {
  UniverUniscriptPlugin
} from "./chunk-Z23BO2OS.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-NSP6P4V2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RHSBRZGM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4LMSY5HK.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZOP4FIJA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3ZIH2AQF.js";
import "./chunk-OSH7ZI3D.js";
import {
  loadDebuggerLocale
} from "./chunk-WTIIFN5V.js";
import "./chunk-YJZ2MS3F.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-P4KBRHT6.js";
import "./chunk-XK57WKI5.js";
import "./chunk-KMFJ52GM.js";
import "./chunk-SGTCDODZ.js";
import "./chunk-G4YFO5AG.js";
import "./chunk-BMZINYYZ.js";
import "./chunk-6I76BXXC.js";
import "./chunk-R5LDF4DG.js";
import "./chunk-6W76PZHA.js";
import "./chunk-CPTZZXPY.js";
import "./chunk-3NID2K3K.js";
import "./chunk-EMXII5U6.js";
import "./chunk-6F7TJWHX.js";
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
