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
} from "../chunk-VM6DQI2Y.js";
import "../chunk-7VUKZER5.js";
import "../chunk-HDEXZHNN.js";
import "../chunk-6WQHIUND.js";
import "../chunk-KAXGBPOS.js";
import "../chunk-PRJ3D3ER.js";
import "../chunk-IMMZ4JEG.js";
import "../chunk-VAAF3QAK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-PXRSFDKA.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-X4LIKTYX.js";
import "../chunk-VHOKDHLK.js";
import "../chunk-6NHGGL7Y.js";
import "../chunk-6ZUZZDXB.js";
import "../chunk-MZ3XSLFD.js";
import "../chunk-HV3ADHTT.js";
import "../chunk-FCGRTVNS.js";
import "../chunk-N2PSWXLX.js";
import "../chunk-JHKWJHHH.js";
import "../chunk-2XTMD4RM.js";
import "../chunk-WRQDK4OJ.js";
import "../chunk-UIRJ6XGE.js";
import "../chunk-KR54AK6M.js";
import "../chunk-KH2OYXAW.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-LBDBPMPX.js";
import "../chunk-LLZXGVD7.js";
import "../chunk-TL4Q72LI.js";
import "../chunk-7ICI7FM3.js";
import "../chunk-3CRDY675.js";
import "../chunk-6WWKMOXK.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-H3IFLAP5.js";
import "../chunk-ZOVDHVYH.js";
import "../chunk-2FVEG47S.js";
import "../chunk-QLTRBV5R.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-L25CYCI3.js";
import "../chunk-4TFOO2AG.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7C7XL6G2.js";
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
