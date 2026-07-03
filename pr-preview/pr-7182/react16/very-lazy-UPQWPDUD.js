import {
  UniverActionRecorderPlugin
} from "./chunk-4UZHR4KC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HXYNKXP7.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6JUD27KF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GGAKFAEV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-Z2RXEBS6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-77GGA3IU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PO6F5DVL.js";
import "./chunk-INSSTJZR.js";
import {
  loadDebuggerLocale
} from "./chunk-73WISCA2.js";
import "./chunk-RAYLNVWQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IMMWEMTL.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-HAEFHR22.js";
import "./chunk-LI7TX254.js";
import "./chunk-QGMG3X2V.js";
import "./chunk-QJMYEOS4.js";
import "./chunk-6SFPH5XF.js";
import "./chunk-6453U27P.js";
import "./chunk-ZOVDHVYH.js";
import "./chunk-QLTRBV5R.js";
import "./chunk-L25CYCI3.js";
import "./chunk-4TFOO2AG.js";
import "./chunk-7C7XL6G2.js";
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
