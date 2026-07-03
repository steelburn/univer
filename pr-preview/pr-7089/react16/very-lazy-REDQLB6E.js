import {
  UniverActionRecorderPlugin
} from "./chunk-5LIRVI3S.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FAUYG7HL.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Z4L4OCX4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YJ3TSA6H.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JH4XAPDJ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-J6O77H6T.js";
import {
  UniverWatermarkPlugin
} from "./chunk-APOKULNL.js";
import "./chunk-7G7OAP54.js";
import {
  loadDebuggerLocale
} from "./chunk-MVJUZ2RL.js";
import "./chunk-JTHLG3U3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-PZODQO3F.js";
import "./chunk-WQGB73FZ.js";
import "./chunk-GLYVBXWL.js";
import "./chunk-NIVGGNXK.js";
import "./chunk-JKXKREPW.js";
import "./chunk-3S4UFDZZ.js";
import "./chunk-RYDZUMMQ.js";
import "./chunk-D4NC5GSO.js";
import "./chunk-ZKOOUDQJ.js";
import "./chunk-EECT4QBM.js";
import "./chunk-F77LJMQC.js";
import "./chunk-6P4JMQYP.js";
import "./chunk-2OKSGSKY.js";
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
