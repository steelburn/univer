import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-QHGF4CHO.js";
import "../chunk-WVWUYZM7.js";
import "../chunk-4RDX5VW5.js";
import "../chunk-3WHN7GQW.js";
import "../chunk-DUW5E2ZO.js";
import "../chunk-XUE523RS.js";
import "../chunk-OC6XTNZ2.js";
import "../chunk-2UBH65ZL.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-NA3REVWF.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UDBXAFIO.js";
import "../chunk-SUQE3MQJ.js";
import "../chunk-XCFPAP6K.js";
import "../chunk-SHBAEM2T.js";
import "../chunk-SJVB56MI.js";
import "../chunk-B4YULJM7.js";
import "../chunk-XQM4AQWM.js";
import "../chunk-45TLB663.js";
import "../chunk-DFFLGMFY.js";
import "../chunk-D2Q2RCQY.js";
import "../chunk-OTDGSBI6.js";
import "../chunk-KFAKKVKR.js";
import "../chunk-5PRAOZGF.js";
import "../chunk-FCZOVYFF.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-Y22Z5ACS.js";
import "../chunk-E2KZ24BH.js";
import "../chunk-62SC2NK7.js";
import "../chunk-NMAQHIKV.js";
import "../chunk-GGLAE6FN.js";
import "../chunk-WB4OG647.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-X254Q5T7.js";
import "../chunk-C3ZQOYBR.js";
import "../chunk-2FVEG47S.js";
import "../chunk-6A74XRF7.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-4QYAFJVV.js";
import "../chunk-ROLOHZXF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-C554UIRR.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/preset-sheets-core-with-worker/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset({
      workerURL: new Worker(new URL("./worker.js", import.meta.url), { type: "module" })
    }),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ]
});
univerAPI.createWorkbook(DEFAULT_WORKBOOK_DATA_DEMO);
window.univer = univer;
window.univerAPI = univerAPI;
