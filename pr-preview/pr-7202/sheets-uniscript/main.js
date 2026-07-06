import {
  UniverUniscriptPlugin
} from "../chunk-CZXJ5GX3.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-2LBWT6B5.js";
import {
  UniverDebuggerPlugin
} from "../chunk-26GIERZC.js";
import "../chunk-5SVECR5F.js";
import {
  zh_CN_default
} from "../chunk-RW443FRL.js";
import "../chunk-AINHTUBC.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-UUDVMASD.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-PG7FNUSK.js";
import "../chunk-EAYEQJ4J.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-GQEKXTHQ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-2JOIDZXJ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-U3S5TFOV.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-KBDFGRW6.js";
import "../chunk-2FVEG47S.js";
import "../chunk-4FBQDXX6.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-7MAGD6AG.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-65ZVRLT5.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-LM6KX6ET.js";
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
