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
} from "../chunk-SFBKK4YX.js";
import "../chunk-67EHWHHL.js";
import "../chunk-OHC4UWBV.js";
import "../chunk-BJ6B55WQ.js";
import "../chunk-HFT36OYU.js";
import "../chunk-CDW6KGV2.js";
import "../chunk-SENHQ4L7.js";
import "../chunk-BNRDLB65.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-JKEL3VJP.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ASADV2TL.js";
import "../chunk-QXBZVIQA.js";
import "../chunk-NWKL74XJ.js";
import "../chunk-ZODLRRYT.js";
import "../chunk-3Z7G2GC3.js";
import "../chunk-XBQUB3V7.js";
import "../chunk-CXUA6E5W.js";
import "../chunk-WIUREH7F.js";
import "../chunk-DBSCVVZF.js";
import "../chunk-U3VXXD5Q.js";
import "../chunk-MDDSISAV.js";
import "../chunk-PG7FNUSK.js";
import "../chunk-V5V2TBM2.js";
import "../chunk-S47X7LKL.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-MFH5G5VE.js";
import "../chunk-YWA6VLD6.js";
import "../chunk-LQV6YUX3.js";
import "../chunk-O4AGYTA4.js";
import "../chunk-VO3VU7DW.js";
import "../chunk-WE43C7WD.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7UIAQ5RJ.js";
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
