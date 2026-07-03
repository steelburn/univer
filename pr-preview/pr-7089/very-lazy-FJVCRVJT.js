import {
  UniverActionRecorderPlugin
} from "./chunk-MN2FW4Q5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-B6ZCTK3I.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EE5KUVZH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-T5GPXJQ7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZJJUIKY7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-IMNOEKPV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-APOKULNL.js";
import "./chunk-HFKIMTZH.js";
import {
  loadDebuggerLocale
} from "./chunk-J22ITUCO.js";
import "./chunk-JTHLG3U3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QPSOVYBI.js";
import "./chunk-N55QRDMN.js";
import "./chunk-6RQ2HL64.js";
import "./chunk-SW6NDM5N.js";
import "./chunk-37PGBMEZ.js";
import "./chunk-TQ4Q34OY.js";
import "./chunk-ROJLKGUP.js";
import "./chunk-D4NC5GSO.js";
import "./chunk-2E7K7WJG.js";
import "./chunk-EECT4QBM.js";
import "./chunk-AWTJ57BU.js";
import "./chunk-4MD24DFJ.js";
import "./chunk-2OKSGSKY.js";
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
