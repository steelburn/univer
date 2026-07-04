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
} from "../chunk-ZL5IS32F.js";
import "../chunk-45TTLUAR.js";
import "../chunk-67RDBRIR.js";
import "../chunk-EECKJHVH.js";
import "../chunk-GFLUZUWY.js";
import "../chunk-E2CBWAC4.js";
import "../chunk-HPNUEXWE.js";
import "../chunk-H4UVSPIK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-WLF5NIKL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-K6W2GKRK.js";
import "../chunk-6ZNYZ6EW.js";
import "../chunk-C7KN3NFM.js";
import "../chunk-QTMUPLBI.js";
import "../chunk-2SRG5WVH.js";
import "../chunk-OJ535HBH.js";
import "../chunk-6IG4XKCI.js";
import "../chunk-RVNGUYVE.js";
import "../chunk-7DRE6BXR.js";
import "../chunk-WBXJWUTV.js";
import "../chunk-RRFTDJHZ.js";
import "../chunk-3CUZLJHJ.js";
import "../chunk-EE3KPUWO.js";
import "../chunk-3KKLHCVI.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-AIJIYB5J.js";
import "../chunk-Z54UMSBV.js";
import "../chunk-H4EGS4NT.js";
import "../chunk-BMBXRLKY.js";
import "../chunk-A6OGKKA2.js";
import "../chunk-FEXAVOZ3.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-LKR2FF62.js";
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
