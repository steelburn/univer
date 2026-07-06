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
} from "../chunk-OTZP3K2A.js";
import "../chunk-CU57RGSF.js";
import "../chunk-RO3KJ5WE.js";
import "../chunk-QLNXHS5A.js";
import "../chunk-6FTC6ENN.js";
import "../chunk-QGHCZFLH.js";
import "../chunk-HHXCTI4W.js";
import "../chunk-BERZTHQ7.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-JKEL3VJP.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CV2QXV6F.js";
import "../chunk-HWRL3XWN.js";
import "../chunk-LNSI4SXV.js";
import "../chunk-ZODLRRYT.js";
import "../chunk-3Z7G2GC3.js";
import "../chunk-XBQUB3V7.js";
import "../chunk-Q6VEOKGU.js";
import "../chunk-A6X46SXO.js";
import "../chunk-DBSCVVZF.js";
import "../chunk-VNY7SZ2G.js";
import "../chunk-IB6Y2QQ6.js";
import "../chunk-PG7FNUSK.js";
import "../chunk-TYGMEEC6.js";
import "../chunk-RJHUXOPM.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-MFH5G5VE.js";
import "../chunk-YWA6VLD6.js";
import "../chunk-T2S72DC4.js";
import "../chunk-O4AGYTA4.js";
import "../chunk-OQX723RW.js";
import "../chunk-5CJN4YVY.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-IDMEHA7N.js";
import "../chunk-3XVATOG6.js";
import "../chunk-2FVEG47S.js";
import "../chunk-EJ7SRPYX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-7MAGD6AG.js";
import "../chunk-65ZVRLT5.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LM6KX6ET.js";
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
