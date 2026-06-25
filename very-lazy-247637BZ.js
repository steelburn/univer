import {
  UniverActionRecorderPlugin
} from "./chunk-Z5LPUK7Z.js";
import {
  UniverUniscriptPlugin
} from "./chunk-4M6PVGGM.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YKXDLRDB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OPG4EEU2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EXWYS343.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FKFIMGSR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4V2NTLE4.js";
import "./chunk-2GQJFC65.js";
import {
  loadDebuggerLocale
} from "./chunk-KJHXEXI7.js";
import "./chunk-EQYCOJLN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VVJLHWYJ.js";
import "./chunk-L552B7LR.js";
import "./chunk-DW5GLPHT.js";
import "./chunk-IYBYC6XC.js";
import "./chunk-6JYTN3YG.js";
import "./chunk-2GSCTQDY.js";
import "./chunk-LNBNUWPI.js";
import "./chunk-LFGCPWJU.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-UOKTNN4A.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
