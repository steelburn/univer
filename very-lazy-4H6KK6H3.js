import {
  UniverActionRecorderPlugin
} from "./chunk-VZLEEMOJ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UZPAY7ND.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OASELRAR.js";
import {
  UniverUniscriptPlugin
} from "./chunk-VJQPCSLJ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-L6VN3DJN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TCSG5IAP.js";
import "./chunk-KDIWPSY2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RC7TCQ2B.js";
import {
  UniverWatermarkPlugin
} from "./chunk-HJANO4QS.js";
import "./chunk-V5ZQE3FL.js";
import "./chunk-IHNGOVE3.js";
import "./chunk-EIAWKFP7.js";
import "./chunk-TKJ44BLP.js";
import "./chunk-6MBQ2LW4.js";
import "./chunk-WY5SBACQ.js";
import "./chunk-GMQ4GLVG.js";
import "./chunk-TWPETBMX.js";
import "./chunk-JPAQCREO.js";
import "./chunk-E7MFA523.js";
import "./chunk-XDSNGS3M.js";
import "./chunk-JD4X33BA.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
    plugins.push([UniverDebuggerPlugin]);
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
