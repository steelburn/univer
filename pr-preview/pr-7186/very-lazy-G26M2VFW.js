import {
  UniverActionRecorderPlugin
} from "./chunk-TZ7IH35S.js";
import {
  UniverUniscriptPlugin
} from "./chunk-EX4VGENU.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5U2NDXG4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-C6KS35ZK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XSDKXOFD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B6KQC5AH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KSNIJ25R.js";
import "./chunk-KSK6U6V5.js";
import {
  loadDebuggerLocale
} from "./chunk-ZUOHQ7L6.js";
import "./chunk-LZJ3DW4E.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZBZBNRU6.js";
import "./chunk-6S7LJOUF.js";
import "./chunk-QXQBAOVG.js";
import "./chunk-RIOOBV5P.js";
import "./chunk-JDGIEI4U.js";
import "./chunk-KMJ2E3CW.js";
import "./chunk-PYMM6LSK.js";
import "./chunk-IAO6ELBM.js";
import "./chunk-KCGNZNPA.js";
import "./chunk-7P52LSCI.js";
import "./chunk-W2VNWHHA.js";
import "./chunk-NB2AU774.js";
import "./chunk-CJNKPU2H.js";
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
