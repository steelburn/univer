import {
  UniverActionRecorderPlugin
} from "./chunk-KUDDJI32.js";
import {
  UniverUniscriptPlugin
} from "./chunk-EUWONK5U.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GDYMWY5S.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MALH3OZI.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2KYH4B4O.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SGTT3J7R.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AUVVHWQQ.js";
import "./chunk-USTVNAPK.js";
import {
  loadDebuggerLocale
} from "./chunk-X7VVIT2J.js";
import "./chunk-ILO3CA5Q.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JPDQBKEP.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-CF7JIU4I.js";
import "./chunk-M633MO4E.js";
import "./chunk-Y55HX77S.js";
import "./chunk-4UTAS6TV.js";
import "./chunk-MK632X77.js";
import "./chunk-VX6S3X62.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-FNWLVP5P.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
