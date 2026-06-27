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
} from "../chunk-YRMB76FC.js";
import "../chunk-MEAEJ4TZ.js";
import "../chunk-BOQZ37MR.js";
import "../chunk-GQZQUDYZ.js";
import "../chunk-E6P6HZ6Z.js";
import "../chunk-YXIX7MTN.js";
import "../chunk-A3UKNXOM.js";
import "../chunk-PFEBMQQV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-FCR6JNUZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-KQO45UGS.js";
import "../chunk-4RGUPQKE.js";
import "../chunk-ITGIMEOS.js";
import "../chunk-X42BEKEF.js";
import "../chunk-HPWZJTNR.js";
import "../chunk-SKYPIRIZ.js";
import "../chunk-VW44BBHM.js";
import "../chunk-QT2KVLSJ.js";
import "../chunk-VM2ESTPX.js";
import "../chunk-MR7OSKRT.js";
import "../chunk-FW5I6O3S.js";
import "../chunk-OGX7UMKT.js";
import "../chunk-M75IOHPL.js";
import "../chunk-OWNWYWPL.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-2USKKZCC.js";
import "../chunk-RYCJB3Z4.js";
import "../chunk-YZH7JF4W.js";
import "../chunk-6PEYLUFM.js";
import "../chunk-O7N5FSIK.js";
import "../chunk-DOP4XK2T.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-WATNN632.js";
import "../chunk-KSKNLR7K.js";
import "../chunk-2FVEG47S.js";
import "../chunk-7FCCOEOP.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-LOCMHYVK.js";
import "../chunk-TJVV3XAG.js";
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
