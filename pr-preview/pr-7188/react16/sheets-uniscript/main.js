import {
  UniverUniscriptPlugin
} from "../chunk-RN7RVQ2O.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ZBM7AOE6.js";
import {
  UniverDebuggerPlugin
} from "../chunk-67T3FVXB.js";
import "../chunk-RZXFEOAY.js";
import {
  zh_CN_default
} from "../chunk-2LAJUHX4.js";
import "../chunk-4VSUED6E.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-WHCKGVWJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-HG2M4TBP.js";
import "../chunk-LW7LBYJO.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-F2JOBDCT.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-OICIWUWS.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-6TGWV6KC.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-OMMCBRCS.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5S33VJ76.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-HEUNIGNJ.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-SE7GQC5E.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-7BSILHFI.js";
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
