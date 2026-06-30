import {
  UniverActionRecorderPlugin
} from "./chunk-TKRENNRL.js";
import {
  UniverUniscriptPlugin
} from "./chunk-NFX7RVDD.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WVWUYZM7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3WHN7GQW.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7SC36CHV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Q7TBCHM7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y3FCVIF5.js";
import "./chunk-CBJJUH2Z.js";
import {
  loadDebuggerLocale
} from "./chunk-UDBXAFIO.js";
import "./chunk-XQM4AQWM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-45TLB663.js";
import "./chunk-DFFLGMFY.js";
import "./chunk-OTDGSBI6.js";
import "./chunk-5PRAOZGF.js";
import "./chunk-FCZOVYFF.js";
import "./chunk-GGLAE6FN.js";
import "./chunk-WB4OG647.js";
import "./chunk-X254Q5T7.js";
import "./chunk-C3ZQOYBR.js";
import "./chunk-6A74XRF7.js";
import "./chunk-4QYAFJVV.js";
import "./chunk-ROLOHZXF.js";
import "./chunk-C554UIRR.js";
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
