import {
  UniverActionRecorderPlugin
} from "./chunk-FTZP5H2C.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JS5DIPWV.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-62FBVCXD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ORKINDK3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6ZJGF3SL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BMQFJKY2.js";
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
} from "./chunk-CJWOQP3T.js";
import "./chunk-DKQWKSTJ.js";
import "./chunk-IVPT3EY7.js";
import "./chunk-L64RJH2T.js";
import "./chunk-G4H3SV5A.js";
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
