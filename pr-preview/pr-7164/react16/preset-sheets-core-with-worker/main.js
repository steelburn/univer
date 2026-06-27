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
} from "../chunk-ZQ7O63PC.js";
import "../chunk-2XTXNQIQ.js";
import "../chunk-7ITWQ46F.js";
import "../chunk-BQJFVNOV.js";
import "../chunk-ZTDXW47E.js";
import "../chunk-HPAPNMVA.js";
import "../chunk-VI3FABBU.js";
import "../chunk-LVCWA7T3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-FIY4BR7H.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-2TTT6VL5.js";
import "../chunk-5Y5D2XSH.js";
import "../chunk-F5FZ6O3L.js";
import "../chunk-D64IY77R.js";
import "../chunk-CBAA7ZLI.js";
import "../chunk-J6GGGZX7.js";
import "../chunk-DDPB3VUB.js";
import "../chunk-FSQ6JFBA.js";
import "../chunk-5VMY54A6.js";
import "../chunk-UHU2FD36.js";
import "../chunk-37INZUHB.js";
import "../chunk-2W2YVYGR.js";
import "../chunk-OP2S3SPG.js";
import "../chunk-IO37G2BN.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-AF67M77R.js";
import "../chunk-COLOREO7.js";
import "../chunk-LCOMKPLE.js";
import "../chunk-JM4QEXQY.js";
import "../chunk-HGUGJM6X.js";
import "../chunk-OK3SPPRM.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GPI5PFDL.js";
import "../chunk-V6ZAAAD2.js";
import "../chunk-2FVEG47S.js";
import "../chunk-PSKEMIPC.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-K63MPEPW.js";
import "../chunk-W7DFTLNN.js";
import {
  default_default,
  mergeLocales
} from "../chunk-3BIMVDWB.js";
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
