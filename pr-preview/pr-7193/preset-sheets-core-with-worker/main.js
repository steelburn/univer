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
} from "../chunk-DL4QKDBD.js";
import "../chunk-ONJN3I52.js";
import "../chunk-UXLSNNXX.js";
import "../chunk-BYUZY6SD.js";
import "../chunk-YON75KEF.js";
import "../chunk-IK2VQFTS.js";
import "../chunk-T3IH47YR.js";
import "../chunk-ROYXNBIR.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-NOA5MEIF.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3T7GBHQT.js";
import "../chunk-CH7FNAON.js";
import "../chunk-5MXXMERW.js";
import "../chunk-6OHW7JMB.js";
import "../chunk-YL77JP6Y.js";
import "../chunk-NFZM2QGT.js";
import "../chunk-BPQI5XQV.js";
import "../chunk-7AX7B4NP.js";
import "../chunk-CLIMCZGN.js";
import "../chunk-EGI7AS7O.js";
import "../chunk-GIBAD37O.js";
import "../chunk-COH4TLLN.js";
import "../chunk-TP455RKZ.js";
import "../chunk-4HEBP4FB.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-O7GW4QEO.js";
import "../chunk-XHFHF2KS.js";
import "../chunk-24WU36UY.js";
import "../chunk-LMJ37ZZE.js";
import "../chunk-FNWQAIAV.js";
import "../chunk-NHEF2VUB.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-PXQ54QE4.js";
import "../chunk-2XSA2LC7.js";
import "../chunk-2FVEG47S.js";
import "../chunk-47PYRXT7.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-IGOTXBK6.js";
import "../chunk-NTKRGZ6Y.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LCVHUHN7.js";
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
