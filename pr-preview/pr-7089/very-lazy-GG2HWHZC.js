import {
  UniverActionRecorderPlugin
} from "./chunk-BOOSA6SG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZJGW2QGY.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-RRMVNQKD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HHJE2KQV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GBBE3BWS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FTOK7OJV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2WOCRTT4.js";
import "./chunk-EP52C2ZP.js";
import {
  loadDebuggerLocale
} from "./chunk-IVLO3CX4.js";
import "./chunk-XSOX5HRX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-J5I7URU6.js";
import "./chunk-WYJJA4K7.js";
import "./chunk-OH6SBI3P.js";
import "./chunk-ZBCIYAJ4.js";
import "./chunk-CQH5VARC.js";
import "./chunk-EYNWJNDH.js";
import "./chunk-5DMPCEVV.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-ROUCSG5T.js";
import "./chunk-5K7IENYW.js";
import "./chunk-LS2SSBVE.js";
import "./chunk-M6JMRJSB.js";
import "./chunk-AM2UDTII.js";
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
