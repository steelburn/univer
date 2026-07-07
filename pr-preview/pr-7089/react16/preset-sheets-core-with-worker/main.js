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
} from "../chunk-DHC2VC43.js";
import "../chunk-SFYELA6D.js";
import "../chunk-OQ36OLW7.js";
import "../chunk-Q5QF2NOY.js";
import "../chunk-OOEJGI2U.js";
import "../chunk-3XK5WDT6.js";
import "../chunk-JBHKGRKR.js";
import "../chunk-DZBYY7NT.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-2W2MWSKJ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-W75I4U4E.js";
import "../chunk-HZ7CXPZE.js";
import "../chunk-CSQWNTTW.js";
import "../chunk-IPBHHSIK.js";
import "../chunk-DJY2B4JL.js";
import "../chunk-PGVXIOH2.js";
import "../chunk-KTI4KJCR.js";
import "../chunk-EZYPXQNE.js";
import "../chunk-5AHFJDRZ.js";
import "../chunk-MH4F6PIU.js";
import "../chunk-V4LAGLIJ.js";
import "../chunk-L765PEWF.js";
import "../chunk-A5EHG7DP.js";
import "../chunk-J6TJFUJJ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-H4NCNWBT.js";
import "../chunk-7JU2SOQE.js";
import "../chunk-UPMXOPSZ.js";
import "../chunk-DA75FTEE.js";
import "../chunk-EYOA5CW3.js";
import "../chunk-Y44STU53.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5VTXYISK.js";
import "../chunk-PAB77PEQ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FAVXEKSH.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-AHI4XB5F.js";
import "../chunk-LFCAT4GF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-CBGIOZGI.js";
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
