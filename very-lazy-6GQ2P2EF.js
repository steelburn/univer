import {
  UniverActionRecorderPlugin
} from "./chunk-GK75JCXJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-J35TP2GB.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PLTXCHB6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WWBEC2S2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7XPQTPOD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LCQ42HKB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-RZXFEOAY.js";
import "./chunk-LJBYCUS6.js";
import {
  loadDebuggerLocale
} from "./chunk-KVUZJRD6.js";
import "./chunk-TVJDJVWT.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-25ZHUKTI.js";
import "./chunk-TSMXMGFP.js";
import "./chunk-PU6OXUNH.js";
import "./chunk-DP5MPQJ2.js";
import "./chunk-UOBARI5X.js";
import "./chunk-KJTYQ4C6.js";
import "./chunk-7VG27XNI.js";
import "./chunk-TKYGRYPV.js";
import "./chunk-WNULU2PR.js";
import "./chunk-5S33VJ76.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
