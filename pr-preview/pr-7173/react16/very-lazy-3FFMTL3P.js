import {
  UniverActionRecorderPlugin
} from "./chunk-KV23MNCG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-PN3G6JR2.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OM5HP2X7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OD3QMQYW.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IGSJH46N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TFKO6SPZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-64HUTA3W.js";
import "./chunk-N3EBHSLZ.js";
import {
  loadDebuggerLocale
} from "./chunk-PSHEMSDX.js";
import "./chunk-ZPK5AH3T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SAS7MJLJ.js";
import "./chunk-6RJDLZIZ.js";
import "./chunk-TE35DJYS.js";
import "./chunk-5BRFBFTR.js";
import "./chunk-PJTMITJH.js";
import "./chunk-4PO5VQGQ.js";
import "./chunk-HWL2O7ZV.js";
import "./chunk-HDLECXKN.js";
import "./chunk-BQSW6T44.js";
import "./chunk-FWMKJL2M.js";
import "./chunk-JA4IFPKI.js";
import "./chunk-XSMQZID2.js";
import "./chunk-EZGZWPMZ.js";
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
