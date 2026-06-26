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
} from "../chunk-QUXCD3DH.js";
import "../chunk-BQOVS3UD.js";
import "../chunk-A4MRCDFN.js";
import "../chunk-KSOG6CJF.js";
import "../chunk-AHR5WR4W.js";
import "../chunk-V4S2NA7X.js";
import "../chunk-LVHBDO4O.js";
import "../chunk-SZABEXV6.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-FCR6JNUZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-5UW7MU4X.js";
import "../chunk-NYZANFZI.js";
import "../chunk-UPBKP3JK.js";
import "../chunk-QSLAIMUQ.js";
import "../chunk-IV33WU5H.js";
import "../chunk-2L3QJOUR.js";
import "../chunk-VW44BBHM.js";
import "../chunk-NSYZKFDG.js";
import "../chunk-OJROURM7.js";
import "../chunk-VOSZBVPG.js";
import "../chunk-U55D2QLV.js";
import "../chunk-2YSRLFYR.js";
import "../chunk-6TQNZ5CE.js";
import "../chunk-LKDUJWDQ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-2USKKZCC.js";
import "../chunk-RYCJB3Z4.js";
import "../chunk-K6AYPAKU.js";
import "../chunk-6PEYLUFM.js";
import "../chunk-6BRE7BU4.js";
import "../chunk-WZAAH4KX.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-WATNN632.js";
import "../chunk-G54VOOXJ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-7FCCOEOP.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-MAKLEPR2.js";
import "../chunk-LOT2R2OM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-K4NPP4YC.js";
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
