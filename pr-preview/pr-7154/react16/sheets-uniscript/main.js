import {
  UniverUniscriptPlugin
} from "../chunk-Q3Z2IW4O.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-5YK7GBA6.js";
import {
  UniverDebuggerPlugin
} from "../chunk-S4ZMZFV2.js";
import "../chunk-4V2NTLE4.js";
import {
  zh_CN_default
} from "../chunk-LMLFG63V.js";
import "../chunk-RJZOPPIR.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-7EWRJ67C.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-RCK736ZR.js";
import "../chunk-OGZUADGA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-PNBDI5JL.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-Y2EKGZ26.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-NSZNDFWI.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-AGKL5WLT.js";
import "../chunk-LOQW54LO.js";
import "../chunk-UOKTNN4A.js";
import "../chunk-2236G4QD.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-XVN2R7WE.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-OWP74SHF.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-SRJPNYWR.js";
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
