import {
  UniverActionRecorderPlugin
} from "./chunk-637O75Z7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-TU4LDEIV.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MEAEJ4TZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GQZQUDYZ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RZPJ4YVD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B3MT54JI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-XMZRHB3U.js";
import "./chunk-7ZXKKBXQ.js";
import {
  loadDebuggerLocale
} from "./chunk-KQO45UGS.js";
import "./chunk-VW44BBHM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QT2KVLSJ.js";
import "./chunk-VM2ESTPX.js";
import "./chunk-FW5I6O3S.js";
import "./chunk-M75IOHPL.js";
import "./chunk-OWNWYWPL.js";
import "./chunk-O7N5FSIK.js";
import "./chunk-DOP4XK2T.js";
import "./chunk-WATNN632.js";
import "./chunk-KSKNLR7K.js";
import "./chunk-7FCCOEOP.js";
import "./chunk-LOCMHYVK.js";
import "./chunk-TJVV3XAG.js";
import "./chunk-K4NPP4YC.js";
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
