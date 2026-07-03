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
} from "../chunk-ASJ3DTJB.js";
import "../chunk-JDPL3PBR.js";
import "../chunk-VD2VRB2T.js";
import "../chunk-ESG4DGFL.js";
import "../chunk-64ZZ5AG6.js";
import "../chunk-5SJMZ4YR.js";
import "../chunk-GVY53PKN.js";
import "../chunk-NW7U2CY6.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-34L2CJVB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-QLJ7OOOB.js";
import "../chunk-QFV24DWK.js";
import "../chunk-GNOB65VN.js";
import "../chunk-RFRCCIVL.js";
import "../chunk-N74XQLTA.js";
import "../chunk-2FJ5LE46.js";
import "../chunk-TKGR7A5I.js";
import "../chunk-CY5P4PQM.js";
import "../chunk-RJ5ZMPQ6.js";
import "../chunk-N5MIE4IT.js";
import "../chunk-KELN34AS.js";
import "../chunk-3BBNCSN5.js";
import "../chunk-EXKNWFSF.js";
import "../chunk-QSOVMFUQ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KFCCECM5.js";
import "../chunk-2PJVBJU5.js";
import "../chunk-HHB7SBCM.js";
import "../chunk-E773POYQ.js";
import "../chunk-RDA67HDS.js";
import "../chunk-CRWIVMZJ.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-BVX7VFBB.js";
import "../chunk-HITDOKBC.js";
import "../chunk-2FVEG47S.js";
import "../chunk-CLK44Y4Q.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-ZJJKBI4V.js";
import "../chunk-CK6DU2KF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-P5KDHCJI.js";
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
