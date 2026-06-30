import {
  UniverActionRecorderPlugin
} from "./chunk-M6ZL3WZU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FNXSNWE2.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OQH32TKZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-I2ALEIWT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7XWLAUA4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MKOVLYYH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y3FCVIF5.js";
import "./chunk-EZ7VJCUB.js";
import {
  loadDebuggerLocale
} from "./chunk-4GXM2FGZ.js";
import "./chunk-IZJT6L4W.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LANH6UQ4.js";
import "./chunk-DFFLGMFY.js";
import "./chunk-5IG7NG7J.js";
import "./chunk-QCTU5SSF.js";
import "./chunk-WJK4JVFL.js";
import "./chunk-XUSXRDTA.js";
import "./chunk-7HTXW44V.js";
import "./chunk-Y2B2TBBI.js";
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
