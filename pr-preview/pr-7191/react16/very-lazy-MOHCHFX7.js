import {
  UniverActionRecorderPlugin
} from "./chunk-3MMICE6O.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OZUDB27J.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MGFORWAI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2JG6JWLE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RXRW3WQ5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KRPHVZM5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-RZXFEOAY.js";
import "./chunk-BC456DKP.js";
import {
  loadDebuggerLocale
} from "./chunk-AORVKSZV.js";
import "./chunk-NOG2ZKFZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ADPGPNHN.js";
import "./chunk-TSMXMGFP.js";
import "./chunk-4Q5IA4SM.js";
import "./chunk-3GXCL4DE.js";
import "./chunk-J2KWK7W4.js";
import "./chunk-YX4RPWZV.js";
import "./chunk-5BC7SV5L.js";
import "./chunk-D3LZAZGX.js";
import "./chunk-WNULU2PR.js";
import "./chunk-OVZSZIDH.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
