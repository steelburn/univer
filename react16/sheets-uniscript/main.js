import {
  UniverUniscriptPlugin
} from "../chunk-VJQPCSLJ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-REHFT7ZP.js";
import "../chunk-HJANO4QS.js";
import "../chunk-V5ZQE3FL.js";
import "../chunk-IHNGOVE3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-OJDH3EIP.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-CDKUTHSD.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-6MBQ2LW4.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-WY5SBACQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-GMQ4GLVG.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-TWPETBMX.js";
import {
  zh_CN_default
} from "../chunk-IPDBHQ7H.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JPAQCREO.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-E7MFA523.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-XDSNGS3M.js";
import {
  Univer
} from "../chunk-JD4X33BA.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets-uniscript/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(_, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
if (IS_E2E) {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
