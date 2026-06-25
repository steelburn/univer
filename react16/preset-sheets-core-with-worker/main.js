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
} from "../chunk-7WYUS6HR.js";
import "../chunk-YKXDLRDB.js";
import "../chunk-U7PVMK5H.js";
import "../chunk-OPG4EEU2.js";
import "../chunk-DAPMJ6GA.js";
import "../chunk-27MVSQNM.js";
import "../chunk-Z5BM2O2U.js";
import "../chunk-PDLSES7A.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PXGELTPL.js";
import {
  createUniver
} from "../chunk-2C3PSTVA.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-KJHXEXI7.js";
import "../chunk-MVFAUMS4.js";
import "../chunk-G775IMXE.js";
import "../chunk-LYUZZESB.js";
import "../chunk-GSFUUQMG.js";
import "../chunk-ENNEGZAA.js";
import "../chunk-EQYCOJLN.js";
import "../chunk-VVJLHWYJ.js";
import "../chunk-L552B7LR.js";
import "../chunk-WS42SYZM.js";
import "../chunk-DW5GLPHT.js";
import "../chunk-RCK736ZR.js";
import "../chunk-IYBYC6XC.js";
import "../chunk-6JYTN3YG.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-V3KCXRXW.js";
import "../chunk-ITFGC7MZ.js";
import "../chunk-7W5OUXUD.js";
import "../chunk-T4BC5SWP.js";
import "../chunk-2GSCTQDY.js";
import "../chunk-LNBNUWPI.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-LFGCPWJU.js";
import "../chunk-QL5ENDFG.js";
import "../chunk-LOQW54LO.js";
import "../chunk-UOKTNN4A.js";
import "../chunk-2236G4QD.js";
import "../chunk-XVN2R7WE.js";
import "../chunk-OWP74SHF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-SRJPNYWR.js";
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
