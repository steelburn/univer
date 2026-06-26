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
} from "../chunk-GSONE6LN.js";
import "../chunk-S3UFIW5B.js";
import "../chunk-7EW4QJCM.js";
import "../chunk-5VGCUMKE.js";
import "../chunk-XNXDNTL4.js";
import "../chunk-52IKK5D4.js";
import "../chunk-YNKMPX3I.js";
import "../chunk-FTNK75LC.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-7PQUMWTQ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GDZIEZ4R.js";
import "../chunk-4LIL4YJH.js";
import "../chunk-SVQB55QE.js";
import "../chunk-AZBCZ3JA.js";
import "../chunk-LSK762TQ.js";
import "../chunk-HNWEDPS2.js";
import "../chunk-7OMJMINS.js";
import "../chunk-WZJQO2S7.js";
import "../chunk-FTUFSAE3.js";
import "../chunk-U5UIVYHP.js";
import "../chunk-2OJD6WGW.js";
import "../chunk-4KTSUL7F.js";
import "../chunk-IJ45CVVE.js";
import "../chunk-TW7PBWPG.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-FRWJMMKP.js";
import "../chunk-AJ5L2I7D.js";
import "../chunk-TVXSUSYQ.js";
import "../chunk-EFRBMLIR.js";
import "../chunk-H2V6DEOX.js";
import "../chunk-OV5I2EGD.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-KXYBSBSD.js";
import "../chunk-T6EDKS5T.js";
import "../chunk-2FVEG47S.js";
import "../chunk-SQB3XKNU.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-BRBIZH26.js";
import "../chunk-ZCW3JLGF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-3DN27AFH.js";
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
