import {
  UniverActionRecorderPlugin
} from "./chunk-AQJX7RWP.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JF7CVH65.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UBVSXJCO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-I2NMPIY5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IOMP6V52.js";
import {
  UniverDebuggerPlugin
} from "./chunk-62XST33Y.js";
import {
  UniverWatermarkPlugin
} from "./chunk-GOEYCPF2.js";
import "./chunk-GREPP2SB.js";
import {
  loadDebuggerLocale
} from "./chunk-VVCDHPF3.js";
import "./chunk-RG5KMJQN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HUNJZ4TH.js";
import "./chunk-PUQSMTNK.js";
import "./chunk-JON46KA2.js";
import "./chunk-NGNEGYS4.js";
import "./chunk-RSE4XJ65.js";
import "./chunk-KWWXQZKE.js";
import "./chunk-PYZPGY5B.js";
import "./chunk-QNYCEYFA.js";
import "./chunk-7OKPYA37.js";
import "./chunk-LDR5HMSP.js";
import "./chunk-IPR36F56.js";
import "./chunk-P3BUXCOC.js";
import "./chunk-B4VGFPLO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/very-lazy.ts
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
