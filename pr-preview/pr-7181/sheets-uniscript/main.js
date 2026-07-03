import {
  UniverUniscriptPlugin
} from "../chunk-BH3MXVSE.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-Z2PVM4QI.js";
import {
  UniverDebuggerPlugin
} from "../chunk-6ILILVNO.js";
import "../chunk-IPUQHYKH.js";
import {
  zh_CN_default
} from "../chunk-2LAJUHX4.js";
import "../chunk-QP2MXPCG.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-CTEGABF2.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-LSASRAKL.js";
import "../chunk-R5ROZDVG.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-HE5S6ZI6.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-QIHEWUMB.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-OSRB4DA7.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-7FAIONDU.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GVT4D57Q.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-MWE37INK.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-5WHMUGXX.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-TEI2QFPC.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

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
    fabEntryUnitType: 2 /* UNIVER_SHEET */,
    localeLoader: loadDebuggerLocale,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
