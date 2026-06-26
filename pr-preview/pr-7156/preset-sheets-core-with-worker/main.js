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
} from "../chunk-WIOHVYGC.js";
import "../chunk-TQ5KXMKH.js";
import "../chunk-ROIO7PS5.js";
import "../chunk-QOHXK2KV.js";
import "../chunk-4VU2UAQG.js";
import "../chunk-JTDPWI7O.js";
import "../chunk-EP5IBW43.js";
import "../chunk-YAKD57XC.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GQUCUDLC.js";
import {
  createUniver
} from "../chunk-FPAQ3IWY.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UJ4POG2F.js";
import "../chunk-3L4S77EK.js";
import "../chunk-LTVIQAEW.js";
import "../chunk-LMUXTFLM.js";
import "../chunk-CHIYLLXV.js";
import "../chunk-2FD3DLXQ.js";
import "../chunk-SM5TGTKR.js";
import "../chunk-XYHI7UJY.js";
import "../chunk-7JS6HMGE.js";
import "../chunk-TQ7KYJME.js";
import "../chunk-UDHQTYDE.js";
import "../chunk-FZ3UWRDE.js";
import "../chunk-V42QMRDN.js";
import "../chunk-XEDPH47T.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-OEI55YOV.js";
import "../chunk-PQCDFAR3.js";
import "../chunk-ZMQGNSOH.js";
import "../chunk-NB7ZYDCP.js";
import "../chunk-ZXFJA52I.js";
import "../chunk-ANAQDJNB.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-BTNAS3YE.js";
import "../chunk-DYNPPXJ5.js";
import "../chunk-2FVEG47S.js";
import "../chunk-ZEVVNN57.js";
import "../chunk-2236G4QD.js";
import "../chunk-YFJR3M5H.js";
import "../chunk-2AX73GH7.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7O3JHHB2.js";
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
