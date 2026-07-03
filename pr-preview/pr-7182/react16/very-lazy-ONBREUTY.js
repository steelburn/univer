import {
  UniverActionRecorderPlugin
} from "./chunk-ONGKTZWH.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YA75C4EC.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FSIOSUUX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RNQCBUAT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZCKMO6HP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CXG6XCE5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PO6F5DVL.js";
import "./chunk-OZRW5YAP.js";
import {
  loadDebuggerLocale
} from "./chunk-HJF3Z56A.js";
import "./chunk-NPL2VW5A.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NW5SLPIP.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-CQL6XDIY.js";
import "./chunk-OZ3W57OC.js";
import "./chunk-DKV56ZS2.js";
import "./chunk-GVBMSGGW.js";
import "./chunk-66QBEWCC.js";
import "./chunk-UZUB5VJ7.js";
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
