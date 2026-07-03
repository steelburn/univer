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
} from "../chunk-T4YRRU7N.js";
import "../chunk-XYSTCS26.js";
import "../chunk-D7FOK2Y5.js";
import "../chunk-E7YV57HD.js";
import "../chunk-AKB7KR25.js";
import "../chunk-QNM2O2KT.js";
import "../chunk-L4FY7DGC.js";
import "../chunk-QZQTT2LC.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-WLF5NIKL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-VWTF72DX.js";
import "../chunk-XMXW3Y2Y.js";
import "../chunk-CMANQUMI.js";
import "../chunk-QTMUPLBI.js";
import "../chunk-2SRG5WVH.js";
import "../chunk-OJ535HBH.js";
import "../chunk-FFX3KAFV.js";
import "../chunk-BR7IXRDB.js";
import "../chunk-7DRE6BXR.js";
import "../chunk-WBXJWUTV.js";
import "../chunk-JTFGS7PS.js";
import "../chunk-3CUZLJHJ.js";
import "../chunk-ELWUTMBR.js";
import "../chunk-MLMWDYZJ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-AIJIYB5J.js";
import "../chunk-Z54UMSBV.js";
import "../chunk-2M6VHNNE.js";
import "../chunk-BMBXRLKY.js";
import "../chunk-7BXLMFUA.js";
import "../chunk-NSKAB4RB.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-PUQR5SXY.js";
import "../chunk-3DCU674G.js";
import "../chunk-2FVEG47S.js";
import "../chunk-OPIJVDZV.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-Z22NX2ZN.js";
import "../chunk-NHJ5OXWA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UVVCF4V5.js";
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
