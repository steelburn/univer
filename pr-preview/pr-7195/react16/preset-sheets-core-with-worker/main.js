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
} from "../chunk-TIZARUVC.js";
import "../chunk-7SAB6VY4.js";
import "../chunk-64I34E2W.js";
import "../chunk-R24ABH7M.js";
import "../chunk-JLUUXD3K.js";
import "../chunk-HLJDDA5A.js";
import "../chunk-OQUBAJCO.js";
import "../chunk-OHPLJPLR.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-EEYRVTRE.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-QGUWVD5K.js";
import "../chunk-J5PBKUKN.js";
import "../chunk-ND473UTI.js";
import "../chunk-WD4S43QL.js";
import "../chunk-M7V424PR.js";
import "../chunk-PHEUIUNT.js";
import "../chunk-X7PDM42A.js";
import "../chunk-UXZRY7K5.js";
import "../chunk-SBAKQZSC.js";
import "../chunk-OFIANAVS.js";
import "../chunk-AB2ASX4N.js";
import "../chunk-3NXY3SOX.js";
import "../chunk-XMZGDVTQ.js";
import "../chunk-TIEX6CJH.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-6IAA3NAQ.js";
import "../chunk-DPG3UMLV.js";
import "../chunk-WV7IIJWC.js";
import "../chunk-5IECQFZK.js";
import "../chunk-IZ46N3AS.js";
import "../chunk-RZPW4CGI.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-MEUEE4XB.js";
import "../chunk-XIWGWHOE.js";
import "../chunk-2FVEG47S.js";
import "../chunk-US5S5UBD.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-5MHJTTDS.js";
import "../chunk-X7DAPWNR.js";
import {
  default_default,
  mergeLocales
} from "../chunk-V6KA3GW7.js";
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
