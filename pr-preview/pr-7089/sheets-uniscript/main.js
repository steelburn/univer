import {
  UniverUniscriptPlugin
} from "../chunk-FNXSNWE2.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-PSBKWPTS.js";
import {
  UniverDebuggerPlugin
} from "../chunk-MKOVLYYH.js";
import "../chunk-Y3FCVIF5.js";
import {
  zh_CN_default
} from "../chunk-PLO6OHDI.js";
import "../chunk-EZ7VJCUB.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-4GXM2FGZ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-KFAKKVKR.js";
import "../chunk-QCTU5SSF.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-WJK4JVFL.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-XUSXRDTA.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-7HTXW44V.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-Y2B2TBBI.js";
import "../chunk-2FVEG47S.js";
import "../chunk-6A74XRF7.js";
import "../chunk-YTTBVE7U.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4QYAFJVV.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-ROLOHZXF.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-C554UIRR.js";
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
