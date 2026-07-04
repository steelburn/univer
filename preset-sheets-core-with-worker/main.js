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
} from "../chunk-DYX7AZHT.js";
import "../chunk-NSP6P4V2.js";
import "../chunk-N2UM2OUR.js";
import "../chunk-RHSBRZGM.js";
import "../chunk-LI3PDK77.js";
import "../chunk-ALJAH4AM.js";
import "../chunk-3PUEH46Q.js";
import "../chunk-4AV5I6QD.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-H4OMMF65.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WTIIFN5V.js";
import "../chunk-HIZXNJQL.js";
import "../chunk-GTWHI5ZI.js";
import "../chunk-QNY7CWR4.js";
import "../chunk-7SFZTVOW.js";
import "../chunk-A3T3PRC2.js";
import "../chunk-YJZ2MS3F.js";
import "../chunk-P4KBRHT6.js";
import "../chunk-XK57WKI5.js";
import "../chunk-OYSCW6KK.js";
import "../chunk-KMFJ52GM.js";
import "../chunk-AFO5V46B.js";
import "../chunk-SGTCDODZ.js";
import "../chunk-G4YFO5AG.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-OYYIS44Q.js";
import "../chunk-7BNLOK4L.js";
import "../chunk-Q3XNDXEJ.js";
import "../chunk-GDA2NUDC.js";
import "../chunk-BMZINYYZ.js";
import "../chunk-6I76BXXC.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-R5LDF4DG.js";
import "../chunk-6W76PZHA.js";
import "../chunk-2FVEG47S.js";
import "../chunk-CPTZZXPY.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-3NID2K3K.js";
import "../chunk-EMXII5U6.js";
import {
  default_default,
  mergeLocales
} from "../chunk-6F7TJWHX.js";
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
