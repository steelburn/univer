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
} from "../chunk-HWQ4KBY6.js";
import "../chunk-K6CX3TJ7.js";
import "../chunk-AWYCV672.js";
import "../chunk-XBHOXYC6.js";
import "../chunk-SG4EAPCE.js";
import "../chunk-Z5DTV75F.js";
import "../chunk-ZBM7AOE6.js";
import "../chunk-37SB4EIZ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-L4VDGL3V.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WHCKGVWJ.js";
import "../chunk-7PQD24TB.js";
import "../chunk-POLSZUTD.js";
import "../chunk-HENDEQSB.js";
import "../chunk-GBQ6TIA6.js";
import "../chunk-WRDRZCZG.js";
import "../chunk-JFWMCIPR.js";
import "../chunk-S22F2O2B.js";
import "../chunk-TSMXMGFP.js";
import "../chunk-ROT7BXSD.js";
import "../chunk-DRRIPBLC.js";
import "../chunk-HG2M4TBP.js";
import "../chunk-LW7LBYJO.js";
import "../chunk-F2JOBDCT.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-YYOTA2UQ.js";
import "../chunk-QPMWDUP5.js";
import "../chunk-PJNEO6VF.js";
import "../chunk-YKTELMTW.js";
import "../chunk-OICIWUWS.js";
import "../chunk-6TGWV6KC.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-OMMCBRCS.js";
import "../chunk-WNULU2PR.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5S33VJ76.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-HEUNIGNJ.js";
import "../chunk-SE7GQC5E.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7BSILHFI.js";
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
