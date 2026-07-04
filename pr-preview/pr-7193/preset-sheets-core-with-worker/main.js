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
} from "../chunk-IQOPRLSZ.js";
import "../chunk-P55YNVUG.js";
import "../chunk-V2D4TBQZ.js";
import "../chunk-6C2KPUTG.js";
import "../chunk-6WOMAPZP.js";
import "../chunk-TRWSGIEZ.js";
import "../chunk-6DJRDB5A.js";
import "../chunk-4ISJUNGW.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-XSFBX7TD.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-5HGQNVZF.js";
import "../chunk-HJCOD2GW.js";
import "../chunk-DI5BZQ5Z.js";
import "../chunk-TXIA2IAD.js";
import "../chunk-JCCDMPDK.js";
import "../chunk-O23MQGQO.js";
import "../chunk-7H2KCI36.js";
import "../chunk-L22P2XDJ.js";
import "../chunk-UWNRN27X.js";
import "../chunk-C4JCE6R3.js";
import "../chunk-TJO7D5LV.js";
import "../chunk-ZBCVSLQP.js";
import "../chunk-BIBCBBJU.js";
import "../chunk-KJYWAHON.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-QKRODMHY.js";
import "../chunk-JENS3GT4.js";
import "../chunk-GPY3P3F2.js";
import "../chunk-SMX5JMJQ.js";
import "../chunk-AQXT3JA3.js";
import "../chunk-TN7TFMGX.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-2O3VW5NY.js";
import "../chunk-UMKCJXP5.js";
import "../chunk-2FVEG47S.js";
import "../chunk-NEDP32GK.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-ZPTY5RQ3.js";
import "../chunk-JS245ZNJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-3KZPIIDJ.js";
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
