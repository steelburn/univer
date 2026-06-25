import {
  UniverActionRecorderPlugin
} from "./chunk-INK2LHRU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-Q3Z2IW4O.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JFR3SSBQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HMKT5EEB.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-W4TZKXHX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UMQDRVO7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4V2NTLE4.js";
import "./chunk-RJZOPPIR.js";
import {
  loadDebuggerLocale
} from "./chunk-7EWRJ67C.js";
import "./chunk-NMZTRHWM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A3CXWEHX.js";
import "./chunk-L552B7LR.js";
import "./chunk-M2HIO4NK.js";
import "./chunk-OGZUADGA.js";
import "./chunk-PNBDI5JL.js";
import "./chunk-Y2EKGZ26.js";
import "./chunk-NSZNDFWI.js";
import "./chunk-AGKL5WLT.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-UOKTNN4A.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
