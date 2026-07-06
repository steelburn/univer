import {
  UniverActionRecorderPlugin
} from "./chunk-HGRV5VAB.js";
import {
  UniverUniscriptPlugin
} from "./chunk-A2HUQPRX.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EJCBMEQL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6ZBZVZBU.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-KL3CVMZM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MEACFNFV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AUVVHWQQ.js";
import "./chunk-WW3X7FHO.js";
import {
  loadDebuggerLocale
} from "./chunk-4MY5OW2Z.js";
import "./chunk-TLVA26IJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YSMRKVLS.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-VE2R7RZE.js";
import "./chunk-ANZUFEKX.js";
import "./chunk-JWG5JT67.js";
import "./chunk-IG4LUXRO.js";
import "./chunk-FPIHPBUB.js";
import "./chunk-CUADIMN7.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-FNWLVP5P.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
