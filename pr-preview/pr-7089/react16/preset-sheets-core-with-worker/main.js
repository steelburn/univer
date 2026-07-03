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
} from "../chunk-YXGBIN4W.js";
import "../chunk-4BH7HEZ6.js";
import "../chunk-YN24I54L.js";
import "../chunk-WS6FT6IT.js";
import "../chunk-SB3BRN2P.js";
import "../chunk-TOHJP3ZX.js";
import "../chunk-KAQUJKFC.js";
import "../chunk-SA4FBJWQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-34L2CJVB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-HTYW4EHM.js";
import "../chunk-UZ4KIKR2.js";
import "../chunk-3YIV7TG2.js";
import "../chunk-USCJC36H.js";
import "../chunk-7Z4X56FI.js";
import "../chunk-LQEA5VQU.js";
import "../chunk-TKGR7A5I.js";
import "../chunk-WS4BZARC.js";
import "../chunk-HX3CAAIY.js";
import "../chunk-RJUSJQ35.js";
import "../chunk-BZ2CNRCG.js";
import "../chunk-2PTJTRYN.js";
import "../chunk-D2NN3LSL.js";
import "../chunk-N3VRBPRQ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KFCCECM5.js";
import "../chunk-2PJVBJU5.js";
import "../chunk-SLTHOWBG.js";
import "../chunk-E773POYQ.js";
import "../chunk-X7UG55BB.js";
import "../chunk-TXJNVTTA.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-BVX7VFBB.js";
import "../chunk-IPGQAMWF.js";
import "../chunk-2FVEG47S.js";
import "../chunk-CLK44Y4Q.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-NFP2ERRU.js";
import "../chunk-XXPIJT3B.js";
import {
  default_default,
  mergeLocales
} from "../chunk-P5KDHCJI.js";
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
