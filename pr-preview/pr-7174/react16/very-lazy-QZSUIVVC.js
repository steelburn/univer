import {
  UniverActionRecorderPlugin
} from "./chunk-MDJWD5HA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-3QU3UO4L.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CPIPAGXA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-US27734W.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HJRG6PKL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LYERB7ER.js";
import {
  UniverWatermarkPlugin
} from "./chunk-64HUTA3W.js";
import "./chunk-PFNAD6UU.js";
import {
  loadDebuggerLocale
} from "./chunk-6PXKRXUI.js";
import "./chunk-ZPK5AH3T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5KNTLBGQ.js";
import "./chunk-AZCEA4BW.js";
import "./chunk-CYSSB7GZ.js";
import "./chunk-PHYCH7W2.js";
import "./chunk-NY6WTFH4.js";
import "./chunk-J37K44IC.js";
import "./chunk-IKEI3MPD.js";
import "./chunk-HDLECXKN.js";
import "./chunk-2CRQQJ6A.js";
import "./chunk-CWQZSNKX.js";
import "./chunk-TFRWRFHW.js";
import "./chunk-DZXTHJ7X.js";
import "./chunk-EZGZWPMZ.js";
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
