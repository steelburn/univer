import {
  UniverActionRecorderPlugin
} from "./chunk-PCKYL5IT.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BQWXBRLT.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-W3K3BQ63.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DQVIBYGQ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SMJKPGLN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W4X6TTGN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NXE6COZZ.js";
import "./chunk-ONUGJLL7.js";
import {
  loadDebuggerLocale
} from "./chunk-HSUM4Q7D.js";
import "./chunk-YJIF43EZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A5T5FO7L.js";
import "./chunk-WPLMSDVI.js";
import "./chunk-2T4LHTPF.js";
import "./chunk-RGUDOGVG.js";
import "./chunk-ZPIFMXX3.js";
import "./chunk-BMTDMI2S.js";
import "./chunk-RV5HGSLX.js";
import "./chunk-M3TRFQLV.js";
import "./chunk-FVCNQDUO.js";
import "./chunk-QEUJA26F.js";
import "./chunk-EDVR2PND.js";
import "./chunk-JT4UYYTA.js";
import "./chunk-H64B2WDJ.js";
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
