import {
  UniverUniscriptPlugin
} from "../chunk-PN3G6JR2.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ZBWZAS3K.js";
import {
  UniverDebuggerPlugin
} from "../chunk-4NYRSWPM.js";
import "../chunk-64HUTA3W.js";
import {
  zh_CN_default
} from "../chunk-2LAJUHX4.js";
import "../chunk-N3EBHSLZ.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-PSHEMSDX.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-C6CJVXNI.js";
import "../chunk-5BRFBFTR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-PJTMITJH.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-4PO5VQGQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-HWL2O7ZV.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-HDLECXKN.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FWMKJL2M.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JA4IFPKI.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-XSMQZID2.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-EZGZWPMZ.js";
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
