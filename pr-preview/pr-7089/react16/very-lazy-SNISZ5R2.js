import {
  UniverActionRecorderPlugin
} from "./chunk-6EPBTCPU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-SRAK4HKQ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SFYELA6D.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Q5QF2NOY.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6ILJRUNW.js";
import {
  UniverDebuggerPlugin
} from "./chunk-F3YDRDAO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JIDABVSX.js";
import "./chunk-72DYZBTZ.js";
import {
  loadDebuggerLocale
} from "./chunk-W75I4U4E.js";
import "./chunk-KTI4KJCR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-EZYPXQNE.js";
import "./chunk-5AHFJDRZ.js";
import "./chunk-V4LAGLIJ.js";
import "./chunk-A5EHG7DP.js";
import "./chunk-J6TJFUJJ.js";
import "./chunk-EYOA5CW3.js";
import "./chunk-Y44STU53.js";
import "./chunk-5VTXYISK.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-FAVXEKSH.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
import "./chunk-CBGIOZGI.js";
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
