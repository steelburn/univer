import {
  UniverActionRecorderPlugin
} from "./chunk-OIQGNBUD.js";
import {
  UniverUniscriptPlugin
} from "./chunk-56SCZBOO.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-O2SCRTR4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-EVRQAVSS.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BBDEBE3B.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NQI2LR6W.js";
import {
  UniverWatermarkPlugin
} from "./chunk-EQJ25XHI.js";
import "./chunk-3J2QLVNB.js";
import {
  loadDebuggerLocale
} from "./chunk-MNP3O7LS.js";
import "./chunk-Z4SGSOU7.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DIPTLWST.js";
import "./chunk-GXYMTZNO.js";
import "./chunk-NCYFLCR7.js";
import "./chunk-2EPIF5W3.js";
import "./chunk-C6QJLPQN.js";
import "./chunk-NCUBJCRA.js";
import "./chunk-5TB2ASKP.js";
import "./chunk-JZJILZ4M.js";
import "./chunk-H5SKM2Z2.js";
import "./chunk-3J62SAS5.js";
import "./chunk-57OP3PH6.js";
import "./chunk-UC2YZEOY.js";
import "./chunk-VXRJXEHF.js";
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
