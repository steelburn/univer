import {
  UniverActionRecorderPlugin
} from "./chunk-3K3AVHVL.js";
import {
  UniverUniscriptPlugin
} from "./chunk-6EHPPN4Z.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KBFVOBDW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YAZDO37I.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LBRBE5VC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-G5RBZLCY.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4V2NTLE4.js";
import "./chunk-OOXBBRG4.js";
import {
  loadDebuggerLocale
} from "./chunk-4LHZBKZ7.js";
import "./chunk-3WEFZVGV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GMIQ4AUW.js";
import "./chunk-L552B7LR.js";
import "./chunk-6VYPUTXK.js";
import "./chunk-VKTC6UB5.js";
import "./chunk-M6GW23CP.js";
import "./chunk-EK3P3N73.js";
import "./chunk-LONSY6T7.js";
import "./chunk-HPSPOCG5.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-UOKTNN4A.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
