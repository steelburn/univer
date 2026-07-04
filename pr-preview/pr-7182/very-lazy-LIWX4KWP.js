import {
  UniverActionRecorderPlugin
} from "./chunk-CI6FEURC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-H2RP33JE.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-4QD4JCSW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WQLBLVMW.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QSFZZPBA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W6SSKOX7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NZAI37OT.js";
import "./chunk-BRD64FI7.js";
import {
  loadDebuggerLocale
} from "./chunk-CDVYIJEF.js";
import "./chunk-WHSSH6AG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LKGDQGMS.js";
import "./chunk-OGZHCYPY.js";
import "./chunk-H5IPHVRO.js";
import "./chunk-N37IVJML.js";
import "./chunk-U24YEMF5.js";
import "./chunk-TLOR3QQH.js";
import "./chunk-5R5XDJDK.js";
import "./chunk-5RHXHS6U.js";
import "./chunk-AVIWFNB4.js";
import "./chunk-QWEPBHBP.js";
import "./chunk-3VS2YENM.js";
import "./chunk-WCE4C2PP.js";
import "./chunk-UKOQHXZK.js";
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
