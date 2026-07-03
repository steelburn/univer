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
} from "../chunk-Z3SCXGZS.js";
import "../chunk-5U2NDXG4.js";
import "../chunk-G4QQTXJB.js";
import "../chunk-C6KS35ZK.js";
import "../chunk-PF3MQFIR.js";
import "../chunk-EXTECZHH.js";
import "../chunk-OJWRN2YZ.js";
import "../chunk-NGBHMULY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-26WCWLDZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ZUOHQ7L6.js";
import "../chunk-BUX4NUYA.js";
import "../chunk-BGFS7FXK.js";
import "../chunk-DVAH2DEY.js";
import "../chunk-JS35E45B.js";
import "../chunk-I524Y24B.js";
import "../chunk-LZJ3DW4E.js";
import "../chunk-ZBZBNRU6.js";
import "../chunk-6S7LJOUF.js";
import "../chunk-DJKGZ5IE.js";
import "../chunk-QXQBAOVG.js";
import "../chunk-JJ7FOJET.js";
import "../chunk-RIOOBV5P.js";
import "../chunk-JDGIEI4U.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-5ZVU7VK7.js";
import "../chunk-THRV6U2R.js";
import "../chunk-FWXJ5WLL.js";
import "../chunk-2ZJYX7XL.js";
import "../chunk-KMJ2E3CW.js";
import "../chunk-PYMM6LSK.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-IAO6ELBM.js";
import "../chunk-KCGNZNPA.js";
import "../chunk-2FVEG47S.js";
import "../chunk-7P52LSCI.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-W2VNWHHA.js";
import "../chunk-NB2AU774.js";
import {
  default_default,
  mergeLocales
} from "../chunk-CJNKPU2H.js";
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
