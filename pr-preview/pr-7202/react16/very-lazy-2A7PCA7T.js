import {
  UniverActionRecorderPlugin
} from "./chunk-NXSHLFO3.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CZXJ5GX3.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KHOH3JI3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-H6H3UMC7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7HJEK723.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YBOMRUT6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-5SVECR5F.js";
import "./chunk-AINHTUBC.js";
import {
  loadDebuggerLocale
} from "./chunk-UUDVMASD.js";
import "./chunk-YFOI2CTW.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DQCKPR3K.js";
import "./chunk-DBSCVVZF.js";
import "./chunk-RIV26ZAQ.js";
import "./chunk-EAYEQJ4J.js";
import "./chunk-GQEKXTHQ.js";
import "./chunk-2JOIDZXJ.js";
import "./chunk-U3S5TFOV.js";
import "./chunk-KBDFGRW6.js";
import "./chunk-3XVATOG6.js";
import "./chunk-4FBQDXX6.js";
import "./chunk-7MAGD6AG.js";
import "./chunk-65ZVRLT5.js";
import "./chunk-LM6KX6ET.js";
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
