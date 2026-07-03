import {
  UniverActionRecorderPlugin
} from "./chunk-QOKSWMPV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-SD4SIFDY.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XYSTCS26.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-E7YV57HD.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QWYOXRIH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZXDTB6CG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SDAVB62P.js";
import "./chunk-HEHYPG6A.js";
import {
  loadDebuggerLocale
} from "./chunk-VWTF72DX.js";
import "./chunk-FFX3KAFV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BR7IXRDB.js";
import "./chunk-7DRE6BXR.js";
import "./chunk-JTFGS7PS.js";
import "./chunk-ELWUTMBR.js";
import "./chunk-MLMWDYZJ.js";
import "./chunk-7BXLMFUA.js";
import "./chunk-NSKAB4RB.js";
import "./chunk-PUQR5SXY.js";
import "./chunk-3DCU674G.js";
import "./chunk-OPIJVDZV.js";
import "./chunk-Z22NX2ZN.js";
import "./chunk-NHJ5OXWA.js";
import "./chunk-UVVCF4V5.js";
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
