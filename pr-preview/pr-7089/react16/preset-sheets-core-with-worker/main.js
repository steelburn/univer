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
} from "../chunk-PSZM5JPA.js";
import "../chunk-XPKXN5Z5.js";
import "../chunk-TK75OEYC.js";
import "../chunk-QVTGQBIC.js";
import "../chunk-3M4F3GV3.js";
import "../chunk-DSISSBOX.js";
import "../chunk-AWFEG5PH.js";
import "../chunk-WNJT36AR.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-HYQJX7KT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-YJJ3ZDTJ.js";
import "../chunk-RYAIPP5V.js";
import "../chunk-ZK5Y5Z4T.js";
import "../chunk-7YK65KMN.js";
import "../chunk-464LOL6K.js";
import "../chunk-E5D3NWK4.js";
import "../chunk-XSOX5HRX.js";
import "../chunk-3OBHG4GZ.js";
import "../chunk-LLWLDPCD.js";
import "../chunk-DKCV6UIT.js";
import "../chunk-FVXS3NDV.js";
import "../chunk-DDASKM27.js";
import "../chunk-4K3FZAUD.js";
import "../chunk-65RQLEP2.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KQNVO4KD.js";
import "../chunk-UPUZUEZ3.js";
import "../chunk-QEJ4QFGB.js";
import "../chunk-6PIPBXM2.js";
import "../chunk-JKMQOKXV.js";
import "../chunk-LENITDPL.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-H3L5AYK5.js";
import "../chunk-WMKYTCYP.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5K7IENYW.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-4ZVILBEQ.js";
import "../chunk-PD2XMV4N.js";
import {
  default_default,
  mergeLocales
} from "../chunk-AM2UDTII.js";
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
