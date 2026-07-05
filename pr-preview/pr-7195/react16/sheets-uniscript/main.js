import {
  UniverUniscriptPlugin
} from "../chunk-7GMUWTJQ.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-OQUBAJCO.js";
import {
  UniverDebuggerPlugin
} from "../chunk-X6BJM3V5.js";
import "../chunk-Q6X2N7NZ.js";
import {
  zh_CN_default
} from "../chunk-RW443FRL.js";
import "../chunk-KMXQRECN.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-QGUWVD5K.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-3NXY3SOX.js";
import "../chunk-XMZGDVTQ.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-TIEX6CJH.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-IZ46N3AS.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-RZPW4CGI.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-MEUEE4XB.js";
import "../chunk-2FVEG47S.js";
import "../chunk-US5S5UBD.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-5MHJTTDS.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-X7DAPWNR.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-V6KA3GW7.js";
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
