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
} from "../chunk-65FB3BMX.js";
import "../chunk-RRMVNQKD.js";
import "../chunk-URC2DSSK.js";
import "../chunk-HHJE2KQV.js";
import "../chunk-ZB2HHRV4.js";
import "../chunk-V5KZ4N2K.js";
import "../chunk-B3JMPQOR.js";
import "../chunk-3K47WPRN.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-HYQJX7KT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-IVLO3CX4.js";
import "../chunk-MFESYCQN.js";
import "../chunk-574FYSUR.js";
import "../chunk-LGMNBJEF.js";
import "../chunk-6TJF6P7W.js";
import "../chunk-LO7QJPFG.js";
import "../chunk-XSOX5HRX.js";
import "../chunk-J5I7URU6.js";
import "../chunk-WYJJA4K7.js";
import "../chunk-DMK2CYLZ.js";
import "../chunk-OH6SBI3P.js";
import "../chunk-E3T2GBVQ.js";
import "../chunk-ZBCIYAJ4.js";
import "../chunk-CQH5VARC.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KQNVO4KD.js";
import "../chunk-UPUZUEZ3.js";
import "../chunk-YBOYNEMG.js";
import "../chunk-6PIPBXM2.js";
import "../chunk-EYNWJNDH.js";
import "../chunk-5DMPCEVV.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-H3L5AYK5.js";
import "../chunk-ROUCSG5T.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5K7IENYW.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-LS2SSBVE.js";
import "../chunk-M6JMRJSB.js";
import {
  default_default,
  mergeLocales
} from "../chunk-AM2UDTII.js";
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
