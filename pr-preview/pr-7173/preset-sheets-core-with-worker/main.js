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
} from "../chunk-PTI4WM62.js";
import "../chunk-OM5HP2X7.js";
import "../chunk-MQBMSCLP.js";
import "../chunk-OD3QMQYW.js";
import "../chunk-LLMCMKHM.js";
import "../chunk-OY4SZD3M.js";
import "../chunk-ZBWZAS3K.js";
import "../chunk-GOYTGSAS.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-L4VOZMSF.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-PSHEMSDX.js";
import "../chunk-56USJOT4.js";
import "../chunk-AYMWZ27W.js";
import "../chunk-C6FIAXG5.js";
import "../chunk-HXOMMN4G.js";
import "../chunk-GXB2TM44.js";
import "../chunk-ZPK5AH3T.js";
import "../chunk-SAS7MJLJ.js";
import "../chunk-6RJDLZIZ.js";
import "../chunk-LZSOEVEI.js";
import "../chunk-TE35DJYS.js";
import "../chunk-C6CJVXNI.js";
import "../chunk-5BRFBFTR.js";
import "../chunk-PJTMITJH.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-HONBTI2P.js";
import "../chunk-VAXRAC5L.js";
import "../chunk-BVARK4E3.js";
import "../chunk-XQE6PPMO.js";
import "../chunk-4PO5VQGQ.js";
import "../chunk-HWL2O7ZV.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-HDLECXKN.js";
import "../chunk-BQSW6T44.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FWMKJL2M.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-JA4IFPKI.js";
import "../chunk-XSMQZID2.js";
import {
  default_default,
  mergeLocales
} from "../chunk-EZGZWPMZ.js";
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
