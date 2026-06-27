import {
  UniverActionRecorderPlugin
} from "./chunk-NAUIJSQW.js";
import {
  UniverUniscriptPlugin
} from "./chunk-NE5PHNOK.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2XTXNQIQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BQJFVNOV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6IIADPIE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MTQADVI6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AV6WGQJI.js";
import "./chunk-WTJWUKWJ.js";
import {
  loadDebuggerLocale
} from "./chunk-2TTT6VL5.js";
import "./chunk-DDPB3VUB.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FSQ6JFBA.js";
import "./chunk-5VMY54A6.js";
import "./chunk-37INZUHB.js";
import "./chunk-OP2S3SPG.js";
import "./chunk-IO37G2BN.js";
import "./chunk-HGUGJM6X.js";
import "./chunk-OK3SPPRM.js";
import "./chunk-GPI5PFDL.js";
import "./chunk-V6ZAAAD2.js";
import "./chunk-PSKEMIPC.js";
import "./chunk-K63MPEPW.js";
import "./chunk-W7DFTLNN.js";
import "./chunk-3BIMVDWB.js";
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
