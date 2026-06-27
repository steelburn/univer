import {
  UniverActionRecorderPlugin
} from "./chunk-FIMUXC46.js";
import {
  UniverUniscriptPlugin
} from "./chunk-P45JP5SX.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CS7OQYUX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HX6JZY4I.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5ABOX3VZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-C2QEAT52.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AV6WGQJI.js";
import "./chunk-B5ARXD5J.js";
import {
  loadDebuggerLocale
} from "./chunk-PS42KNKU.js";
import "./chunk-DDPB3VUB.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HFJ5CWFB.js";
import "./chunk-ZW23EQ2H.js";
import "./chunk-TORCEFV5.js";
import "./chunk-EJT77ZBG.js";
import "./chunk-2SFFFFBJ.js";
import "./chunk-XT7ZGLUQ.js";
import "./chunk-YKE4JHR7.js";
import "./chunk-GPI5PFDL.js";
import "./chunk-IOTQISKE.js";
import "./chunk-PSKEMIPC.js";
import "./chunk-7BFDWMZU.js";
import "./chunk-FTAHREJU.js";
import "./chunk-3BIMVDWB.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/very-lazy.ts
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
