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
} from "../chunk-OFRFL5DH.js";
import "../chunk-KBFVOBDW.js";
import "../chunk-RMJSCYCF.js";
import "../chunk-YAZDO37I.js";
import "../chunk-BBPOOW6N.js";
import "../chunk-OXXGXC2E.js";
import "../chunk-4EVLF3DC.js";
import "../chunk-VODMCTEC.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GQUCUDLC.js";
import {
  createUniver
} from "../chunk-2C3PSTVA.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-4LHZBKZ7.js";
import "../chunk-NFGSR4AW.js";
import "../chunk-UKFRH2HX.js";
import "../chunk-LYUZZESB.js";
import "../chunk-GSFUUQMG.js";
import "../chunk-ENNEGZAA.js";
import "../chunk-3WEFZVGV.js";
import "../chunk-GMIQ4AUW.js";
import "../chunk-L552B7LR.js";
import "../chunk-S7IYDQRZ.js";
import "../chunk-6VYPUTXK.js";
import "../chunk-RCK736ZR.js";
import "../chunk-VKTC6UB5.js";
import "../chunk-M6GW23CP.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-V3KCXRXW.js";
import "../chunk-ITFGC7MZ.js";
import "../chunk-6D7ME7PG.js";
import "../chunk-T4BC5SWP.js";
import "../chunk-EK3P3N73.js";
import "../chunk-LONSY6T7.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-HPSPOCG5.js";
import "../chunk-QL5ENDFG.js";
import "../chunk-2FVEG47S.js";
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
