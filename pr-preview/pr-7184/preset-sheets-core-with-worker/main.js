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
} from "../chunk-RRSNDZWJ.js";
import "../chunk-EDPYOOAG.js";
import "../chunk-UKXQDZKC.js";
import "../chunk-43UWPUKX.js";
import "../chunk-T6WHOABO.js";
import "../chunk-XVGR4IFX.js";
import "../chunk-IRQEIPCC.js";
import "../chunk-FRVQO3MT.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-26WCWLDZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CRHH5C62.js";
import "../chunk-OEYRCWIG.js";
import "../chunk-NULIHTF3.js";
import "../chunk-DVAH2DEY.js";
import "../chunk-JS35E45B.js";
import "../chunk-I524Y24B.js";
import "../chunk-NUMPGE4X.js";
import "../chunk-R2CTOE6F.js";
import "../chunk-6S7LJOUF.js";
import "../chunk-DJKGZ5IE.js";
import "../chunk-V66IWQEN.js";
import "../chunk-JJ7FOJET.js";
import "../chunk-YYEWPWXS.js";
import "../chunk-7M4O4HS2.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-5ZVU7VK7.js";
import "../chunk-THRV6U2R.js";
import "../chunk-5MPIEMGY.js";
import "../chunk-2ZJYX7XL.js";
import "../chunk-U2VZ5U2H.js";
import "../chunk-3MZA2Q3T.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-4ITOEFIV.js";
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
