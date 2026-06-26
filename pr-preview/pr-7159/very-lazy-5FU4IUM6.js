import {
  UniverActionRecorderPlugin
} from "./chunk-AODQVYQE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-LP7UAP5T.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-H4D4WHFT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QIVXAGWC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HZGYMRRO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JVZIPDFO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-E5H5VUJZ.js";
import "./chunk-KJ5BIXFF.js";
import {
  loadDebuggerLocale
} from "./chunk-3SZXWTZU.js";
import "./chunk-YI7AFNLV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-R5ELJ6CB.js";
import "./chunk-4RC7FQ3E.js";
import "./chunk-P7PAORB2.js";
import "./chunk-VEGYA2J2.js";
import "./chunk-ZGGDB4JA.js";
import "./chunk-SS6EWUSO.js";
import "./chunk-MJIKSOFJ.js";
import "./chunk-6J27KZCS.js";
import "./chunk-CKYJLVLX.js";
import "./chunk-3EB7TTBB.js";
import "./chunk-A3IQHLDC.js";
import "./chunk-FFQE2NPY.js";
import "./chunk-JHXES2N3.js";
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
