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
} from "../chunk-PIDLECRX.js";
import "../chunk-5GLPWW4V.js";
import "../chunk-C3J5V4AW.js";
import "../chunk-AED55GOE.js";
import "../chunk-EDQTHB42.js";
import "../chunk-QACEXGWY.js";
import "../chunk-F66QQQ7W.js";
import "../chunk-6ATIVTJQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-7Q3UK6J4.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-EV3CEHCV.js";
import "../chunk-IOMPAW7O.js";
import "../chunk-IHSKJNFZ.js";
import "../chunk-UTDRKTED.js";
import "../chunk-FCCQN5QL.js";
import "../chunk-TDR6CHOZ.js";
import "../chunk-XMIPH6YJ.js";
import "../chunk-HF6YEUW2.js";
import "../chunk-DKQWKSTJ.js";
import "../chunk-KWU2VN5P.js";
import "../chunk-PI7EPSS3.js";
import "../chunk-HOCNG3UD.js";
import "../chunk-W5LZZ43L.js";
import "../chunk-E4N3OZS5.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-54CGLIDO.js";
import "../chunk-AHX6T6BA.js";
import "../chunk-Z37LGIL3.js";
import "../chunk-UXRKAF4B.js";
import "../chunk-O7UOHNOS.js";
import "../chunk-HKBJ7D45.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-C7KTYNCZ.js";
import "../chunk-GFE77NE5.js";
import "../chunk-2FVEG47S.js";
import "../chunk-56NGTYAW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-ZZ4GQ3KO.js";
import "../chunk-YC3KISDR.js";
import {
  default_default,
  mergeLocales
} from "../chunk-S6MVWVUZ.js";
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
