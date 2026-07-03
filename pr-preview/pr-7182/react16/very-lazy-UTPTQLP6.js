import {
  UniverActionRecorderPlugin
} from "./chunk-OSFZ6GX2.js";
import {
  UniverUniscriptPlugin
} from "./chunk-PJVYMMX5.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LF57JPW7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WPMYNED6.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-A46AMJIY.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VRQWEZX4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PO6F5DVL.js";
import "./chunk-TYOQQQUV.js";
import {
  loadDebuggerLocale
} from "./chunk-NXTZ3OLL.js";
import "./chunk-UGJTHJBL.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5BVNB7T4.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-FHZT2XH3.js";
import "./chunk-LB6D577B.js";
import "./chunk-QJQXFRSO.js";
import "./chunk-CMICBBPE.js";
import "./chunk-H7VUOD7H.js";
import "./chunk-MJGQ6AU2.js";
import "./chunk-ZOVDHVYH.js";
import "./chunk-QLTRBV5R.js";
import "./chunk-L25CYCI3.js";
import "./chunk-4TFOO2AG.js";
import "./chunk-7C7XL6G2.js";
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
