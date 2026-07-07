import {
  UniverActionRecorderPlugin
} from "./chunk-RDN3PKLW.js";
import {
  UniverUniscriptPlugin
} from "./chunk-64KRLGXU.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UKBINELH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-SQE6CNID.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HZEJWOQO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XECB3Q2S.js";
import {
  UniverWatermarkPlugin
} from "./chunk-J7NXJW2W.js";
import "./chunk-SC7ESN6H.js";
import {
  loadDebuggerLocale
} from "./chunk-3NMX2PPZ.js";
import "./chunk-LEDWXXDX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MAYKK5OX.js";
import "./chunk-5KGCGXNI.js";
import "./chunk-VVDBWUG3.js";
import "./chunk-A52JLQXH.js";
import "./chunk-2BCLHJDF.js";
import "./chunk-5BVBJYD7.js";
import "./chunk-ZT4DTC4C.js";
import "./chunk-KAOBDX34.js";
import "./chunk-VOQNCJT4.js";
import "./chunk-RBL4FSUX.js";
import "./chunk-3WUY5WXU.js";
import "./chunk-YIWQ4VME.js";
import "./chunk-QPAXVCAC.js";
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
