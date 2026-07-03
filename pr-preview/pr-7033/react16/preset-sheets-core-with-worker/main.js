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
} from "../chunk-EYI2AUXI.js";
import "../chunk-KCQNCIGB.js";
import "../chunk-CM6XZCV5.js";
import "../chunk-5TDNM3JJ.js";
import "../chunk-4TUD55BG.js";
import "../chunk-C62BY63B.js";
import "../chunk-7BQ4QIL6.js";
import "../chunk-XRUV5PRA.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-SPQAYSN7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-5FYX42XZ.js";
import "../chunk-HJ5I4VKH.js";
import "../chunk-GIND5DRA.js";
import "../chunk-H6IKFNUB.js";
import "../chunk-I5QADAWK.js";
import "../chunk-WEH6UA5C.js";
import "../chunk-GDGYEMEU.js";
import "../chunk-T5VH2KSY.js";
import "../chunk-LBKVQ5E5.js";
import "../chunk-TG5VI7XE.js";
import "../chunk-LGEO4VJE.js";
import "../chunk-LSASRAKL.js";
import "../chunk-MPWABH4Y.js";
import "../chunk-TKUEXYWD.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-JEK6NWAI.js";
import "../chunk-YIILNNZG.js";
import "../chunk-UYSQPR7B.js";
import "../chunk-NPMILPK4.js";
import "../chunk-4XCOAXSD.js";
import "../chunk-3EWICPLI.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-6PSEXSBX.js";
import "../chunk-IGRQIP3D.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GVT4D57Q.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-MWE37INK.js";
import "../chunk-5WHMUGXX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-TEI2QFPC.js";
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
