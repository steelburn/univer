import {
  UniverActionRecorderPlugin
} from "./chunk-7HOD2I7S.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RVQBOP4G.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HSN6BWXV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2WU6MOEP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-B52GCPPC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-J63ROBWT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-T2KRPKNM.js";
import "./chunk-7ZBMXBFZ.js";
import {
  loadDebuggerLocale
} from "./chunk-EV3CEHCV.js";
import "./chunk-XMIPH6YJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SWPYSGYN.js";
import "./chunk-DKQWKSTJ.js";
import "./chunk-MILSMFIB.js";
import "./chunk-BIMHKKRX.js";
import "./chunk-45J2AANX.js";
import "./chunk-O7UOHNOS.js";
import "./chunk-HKBJ7D45.js";
import "./chunk-C7KTYNCZ.js";
import "./chunk-GFE77NE5.js";
import "./chunk-56NGTYAW.js";
import "./chunk-ZZ4GQ3KO.js";
import "./chunk-YC3KISDR.js";
import "./chunk-S6MVWVUZ.js";
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
