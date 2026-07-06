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
} from "../chunk-FYNR25CS.js";
import "../chunk-KHOH3JI3.js";
import "../chunk-5GT4B6BH.js";
import "../chunk-H6H3UMC7.js";
import "../chunk-B37NLZO3.js";
import "../chunk-5KNEAR73.js";
import "../chunk-2LBWT6B5.js";
import "../chunk-2WY4MIB4.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-IVCVETJK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UUDVMASD.js";
import "../chunk-2DBVIRD6.js";
import "../chunk-65R2GNPX.js";
import "../chunk-ZODLRRYT.js";
import "../chunk-WJ52ZBC7.js";
import "../chunk-XBQUB3V7.js";
import "../chunk-YFOI2CTW.js";
import "../chunk-DQCKPR3K.js";
import "../chunk-DBSCVVZF.js";
import "../chunk-VNY7SZ2G.js";
import "../chunk-RIV26ZAQ.js";
import "../chunk-PG7FNUSK.js";
import "../chunk-EAYEQJ4J.js";
import "../chunk-GQEKXTHQ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-IM5RNG2Z.js";
import "../chunk-YWA6VLD6.js";
import "../chunk-Y5YWUSJA.js";
import "../chunk-O4AGYTA4.js";
import "../chunk-2JOIDZXJ.js";
import "../chunk-U3S5TFOV.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-KBDFGRW6.js";
import "../chunk-3XVATOG6.js";
import "../chunk-2FVEG47S.js";
import "../chunk-4FBQDXX6.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-7MAGD6AG.js";
import "../chunk-65ZVRLT5.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LM6KX6ET.js";
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
