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
} from "../chunk-4VITDBSV.js";
import "../chunk-PCUYGAB7.js";
import "../chunk-UGN4DUTP.js";
import "../chunk-IJCYXOTU.js";
import "../chunk-TUVEGPYH.js";
import "../chunk-T5MKEGVF.js";
import "../chunk-FVEBSOLR.js";
import "../chunk-EOEOSYOV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-AYTCSXZV.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3QFV2HRE.js";
import "../chunk-ZTOHQCDS.js";
import "../chunk-FFIUGJSG.js";
import "../chunk-ZVVKS6JO.js";
import "../chunk-R235NLA5.js";
import "../chunk-WRSK4IIY.js";
import "../chunk-KU2DSEN5.js";
import "../chunk-J3KBQHWD.js";
import "../chunk-HRUJYZFA.js";
import "../chunk-UWQCDZP4.js";
import "../chunk-4GPSW7WW.js";
import "../chunk-VPOPJAKE.js";
import "../chunk-WKMXKJ4U.js";
import "../chunk-TMXBBFQG.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-W3K7WMUY.js";
import "../chunk-PAWGQHHS.js";
import "../chunk-XXY3ZIT7.js";
import "../chunk-DZPFJXQA.js";
import "../chunk-EGY4MQGY.js";
import "../chunk-HVYBSRJX.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7CLHRL5D.js";
import "../chunk-3ONFBMGU.js";
import "../chunk-2FVEG47S.js";
import "../chunk-22FIWLI4.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-4YRUDHBP.js";
import "../chunk-VZRP7WSK.js";
import {
  default_default,
  mergeLocales
} from "../chunk-NQFT3NIL.js";
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
