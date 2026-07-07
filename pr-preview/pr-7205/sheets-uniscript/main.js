import {
  UniverUniscriptPlugin
} from "../chunk-6LR7CE5N.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-3BFKFSZE.js";
import {
  UniverDebuggerPlugin
} from "../chunk-7VKP2B47.js";
import "../chunk-PXNCLMC7.js";
import {
  zh_CN_default
} from "../chunk-RW443FRL.js";
import "../chunk-E6XF33KB.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-2QLJP2FS.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-5I2CJEUN.js";
import "../chunk-JJUIGY5K.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-XVYLP3GF.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-PXHBEZNC.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UYAWZQ7D.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-K7QVM4VQ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-XRSVWX6F.js";
import "../chunk-GNAKMJK7.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-YGL77P23.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-UZB6LHUM.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-QJESARYQ.js";
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
