import {
  UniverActionRecorderPlugin
} from "./chunk-QVQIZQ5T.js";
import {
  UniverUniscriptPlugin
} from "./chunk-NCMHLOZP.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2GPHHGOQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TNCMW3KS.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-K7OR7TGE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2KLSKYY4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NZAI37OT.js";
import "./chunk-AUMKBFBH.js";
import {
  loadDebuggerLocale
} from "./chunk-6UH5WRGL.js";
import "./chunk-WK6HIUZ7.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DNPPNNOV.js";
import "./chunk-OGZHCYPY.js";
import "./chunk-WRGFJEAK.js";
import "./chunk-FFYNRHRC.js";
import "./chunk-PQFL3CAG.js";
import "./chunk-5C6CNY2L.js";
import "./chunk-C4DUVGK5.js";
import "./chunk-B6YQ7SMI.js";
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
