import {
  UniverActionRecorderPlugin
} from "./chunk-HRNFHSQJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-EDY6XZZN.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7VUKZER5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6WQHIUND.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JC47LPEB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KYKYDSNA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PO6F5DVL.js";
import "./chunk-NCH3DGSG.js";
import {
  loadDebuggerLocale
} from "./chunk-X4LIKTYX.js";
import "./chunk-FCGRTVNS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-N2PSWXLX.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-WRQDK4OJ.js";
import "./chunk-KR54AK6M.js";
import "./chunk-KH2OYXAW.js";
import "./chunk-3CRDY675.js";
import "./chunk-6WWKMOXK.js";
import "./chunk-H3IFLAP5.js";
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
