import {
  UniverActionRecorderPlugin
} from "./chunk-3KHS4YRB.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FK4FIU5G.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JQ2T64QD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-65MG3URE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FISPIW6I.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YQC2DIE5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2WOCRTT4.js";
import "./chunk-6DQW37F6.js";
import {
  loadDebuggerLocale
} from "./chunk-Y4NWSE5T.js";
import "./chunk-XSOX5HRX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TDKEO627.js";
import "./chunk-LLWLDPCD.js";
import "./chunk-LAB3P5WS.js";
import "./chunk-HMG34QTQ.js";
import "./chunk-WODLW4WL.js";
import "./chunk-R2NUHHOI.js";
import "./chunk-RR6M52SX.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-WMKYTCYP.js";
import "./chunk-5K7IENYW.js";
import "./chunk-4ZVILBEQ.js";
import "./chunk-PD2XMV4N.js";
import "./chunk-AM2UDTII.js";
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
