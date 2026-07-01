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
} from "../chunk-QVMELDF3.js";
import "../chunk-CPIPAGXA.js";
import "../chunk-4XSH7XPL.js";
import "../chunk-US27734W.js";
import "../chunk-PRF2IKBE.js";
import "../chunk-YL6TTMMA.js";
import "../chunk-VYNSTJB7.js";
import "../chunk-WEA3Q7NY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-L4VOZMSF.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6PXKRXUI.js";
import "../chunk-MEOQWCNZ.js";
import "../chunk-4U3Z4YU2.js";
import "../chunk-3MNTIG4X.js";
import "../chunk-ZEKU2RRE.js";
import "../chunk-RCWWIC46.js";
import "../chunk-ZPK5AH3T.js";
import "../chunk-5KNTLBGQ.js";
import "../chunk-AZCEA4BW.js";
import "../chunk-QFSZPGGK.js";
import "../chunk-CYSSB7GZ.js";
import "../chunk-7RRRPXVE.js";
import "../chunk-PHYCH7W2.js";
import "../chunk-NY6WTFH4.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-HONBTI2P.js";
import "../chunk-VAXRAC5L.js";
import "../chunk-3RMYYSVU.js";
import "../chunk-XQE6PPMO.js";
import "../chunk-J37K44IC.js";
import "../chunk-IKEI3MPD.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-HDLECXKN.js";
import "../chunk-2CRQQJ6A.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FWMKJL2M.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-TFRWRFHW.js";
import "../chunk-DZXTHJ7X.js";
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
