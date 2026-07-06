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
} from "../chunk-CEB5IKQD.js";
import "../chunk-H2LLWVFR.js";
import "../chunk-Y77XID7G.js";
import "../chunk-THLOZGOD.js";
import "../chunk-QJDEOLKN.js";
import "../chunk-ULMC4OMT.js";
import "../chunk-CZLRFGYU.js";
import "../chunk-EMXR2HSO.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-6CPJKPK2.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-SFWBLHTG.js";
import "../chunk-MUFC7NNX.js";
import "../chunk-2GI44KSH.js";
import "../chunk-3XWENCEQ.js";
import "../chunk-AXXDQTYB.js";
import "../chunk-4R5LLVR5.js";
import "../chunk-TUONPMFV.js";
import "../chunk-TMYCNBIB.js";
import "../chunk-YYFJ72Q5.js";
import "../chunk-EZYIXBES.js";
import "../chunk-HUMEXQTA.js";
import "../chunk-2TZU3TJQ.js";
import "../chunk-C7M7P6HE.js";
import "../chunk-OUXUBCXX.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-4GCGECCX.js";
import "../chunk-UNXW66Y7.js";
import "../chunk-N4ZZ4DMH.js";
import "../chunk-PHM76AHR.js";
import "../chunk-XY3HBZFM.js";
import "../chunk-X3B5WOQX.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-DLEWTMBN.js";
import "../chunk-3TTOIEIC.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FNWLVP5P.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-6RIEYIB7.js";
import "../chunk-2NSFOEHV.js";
import {
  default_default,
  mergeLocales
} from "../chunk-NKLVFE4S.js";
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
