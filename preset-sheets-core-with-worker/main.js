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
} from "../chunk-EW5NAABQ.js";
import "../chunk-W3K3BQ63.js";
import "../chunk-SNZUZW3E.js";
import "../chunk-DQVIBYGQ.js";
import "../chunk-MOWA3K4Z.js";
import "../chunk-WBUGID6D.js";
import "../chunk-ZJAQD3YA.js";
import "../chunk-4UYV4UQS.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-HFKUCKNR.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-HSUM4Q7D.js";
import "../chunk-JACJAHHP.js";
import "../chunk-6BZJQ3PP.js";
import "../chunk-3BDXJ5LY.js";
import "../chunk-OMFJYXZB.js";
import "../chunk-CYMVZCSK.js";
import "../chunk-YJIF43EZ.js";
import "../chunk-A5T5FO7L.js";
import "../chunk-WPLMSDVI.js";
import "../chunk-BD7INVQP.js";
import "../chunk-2T4LHTPF.js";
import "../chunk-KZBHPHNR.js";
import "../chunk-RGUDOGVG.js";
import "../chunk-ZPIFMXX3.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-3IOEHLHW.js";
import "../chunk-TEACEKXR.js";
import "../chunk-C6GVGYTI.js";
import "../chunk-VVTBH4WP.js";
import "../chunk-BMTDMI2S.js";
import "../chunk-RV5HGSLX.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-M3TRFQLV.js";
import "../chunk-FVCNQDUO.js";
import "../chunk-2FVEG47S.js";
import "../chunk-QEUJA26F.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-EDVR2PND.js";
import "../chunk-JT4UYYTA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-H64B2WDJ.js";
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
