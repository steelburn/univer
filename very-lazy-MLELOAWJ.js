import {
  UniverActionRecorderPlugin
} from "./chunk-HAZRL727.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZTDBW4XI.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KCQNCIGB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5TDNM3JJ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SZ7E5SRN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EWEIBTVX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IPUQHYKH.js";
import "./chunk-3YLJDFED.js";
import {
  loadDebuggerLocale
} from "./chunk-5FYX42XZ.js";
import "./chunk-GDGYEMEU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-T5VH2KSY.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-LGEO4VJE.js";
import "./chunk-MPWABH4Y.js";
import "./chunk-TKUEXYWD.js";
import "./chunk-4XCOAXSD.js";
import "./chunk-3EWICPLI.js";
import "./chunk-6PSEXSBX.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-GVT4D57Q.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
