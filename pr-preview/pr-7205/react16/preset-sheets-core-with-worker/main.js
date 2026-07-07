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
} from "../chunk-C7OSVD6T.js";
import "../chunk-73QZSWVQ.js";
import "../chunk-VC3FGYKS.js";
import "../chunk-SGXZDTSE.js";
import "../chunk-VFXBM4W7.js";
import "../chunk-PRFBDF43.js";
import "../chunk-3BFKFSZE.js";
import "../chunk-7NWWYHLN.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-YLLB75SC.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-2QLJP2FS.js";
import "../chunk-S72SCX6W.js";
import "../chunk-VP5TLGWK.js";
import "../chunk-QQH4WLSL.js";
import "../chunk-M64YMUOX.js";
import "../chunk-B3RFGDU3.js";
import "../chunk-PKUCA2TV.js";
import "../chunk-XBIECRT6.js";
import "../chunk-6SJSSRNL.js";
import "../chunk-XGUKHRYW.js";
import "../chunk-WW4LPWLF.js";
import "../chunk-5I2CJEUN.js";
import "../chunk-JJUIGY5K.js";
import "../chunk-XVYLP3GF.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-ZIUMVMVX.js";
import "../chunk-DSWBQDJK.js";
import "../chunk-TJ56ZIIJ.js";
import "../chunk-HIJCDAAU.js";
import "../chunk-PXHBEZNC.js";
import "../chunk-UYAWZQ7D.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-K7QVM4VQ.js";
import "../chunk-UUXCCQDN.js";
import "../chunk-2FVEG47S.js";
import "../chunk-XRSVWX6F.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-YGL77P23.js";
import "../chunk-UZB6LHUM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-QJESARYQ.js";
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
