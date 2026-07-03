import {
  UniverActionRecorderPlugin
} from "./chunk-OFBM5YPU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-G7J26HIT.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XERX5WHT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-SEO736EC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NG47F6RL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FHIEJ454.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QTPPJLYG.js";
import "./chunk-FUNJBXAY.js";
import {
  loadDebuggerLocale
} from "./chunk-KIYMXMPJ.js";
import "./chunk-PG34B7FK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GYLC27YO.js";
import "./chunk-RJ5ZMPQ6.js";
import "./chunk-LYL777Z2.js";
import "./chunk-UTQ3QUPW.js";
import "./chunk-IWAV5DLX.js";
import "./chunk-ND6OWVQZ.js";
import "./chunk-JAWWWCPE.js";
import "./chunk-PWDVVLTD.js";
import "./chunk-HITDOKBC.js";
import "./chunk-CLK44Y4Q.js";
import "./chunk-ZJJKBI4V.js";
import "./chunk-CK6DU2KF.js";
import "./chunk-P5KDHCJI.js";
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
