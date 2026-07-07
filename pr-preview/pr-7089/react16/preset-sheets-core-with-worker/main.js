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
} from "../chunk-RDXRYCMN.js";
import "../chunk-2DVTY6QR.js";
import "../chunk-7YAP5O2Q.js";
import "../chunk-S6DXAPUT.js";
import "../chunk-W6HGLY2W.js";
import "../chunk-IE2UDGWJ.js";
import "../chunk-46TQE63T.js";
import "../chunk-TMAMEZIG.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-2GK253VX.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-C742WVOX.js";
import "../chunk-EUBI4YWN.js";
import "../chunk-VSYDONTN.js";
import "../chunk-HXKZ2IDP.js";
import "../chunk-6MF2C3SW.js";
import "../chunk-T3XDRZIU.js";
import "../chunk-LEDWXXDX.js";
import "../chunk-ODRD5KW4.js";
import "../chunk-5KGCGXNI.js";
import "../chunk-5ULIT7OO.js";
import "../chunk-P3LVN2VS.js";
import "../chunk-XBC5FNZ2.js";
import "../chunk-5UVQ6OII.js";
import "../chunk-A4MPPH5A.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-OLD5G3OI.js";
import "../chunk-K2CRYMG5.js";
import "../chunk-YKR3TIF4.js";
import "../chunk-J5IWGUYY.js";
import "../chunk-F4HTKBLM.js";
import "../chunk-UEVG3UZ4.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-KAOBDX34.js";
import "../chunk-VOQNCJT4.js";
import "../chunk-2FVEG47S.js";
import "../chunk-RBL4FSUX.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-3WUY5WXU.js";
import "../chunk-YIWQ4VME.js";
import {
  default_default,
  mergeLocales
} from "../chunk-QPAXVCAC.js";
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
