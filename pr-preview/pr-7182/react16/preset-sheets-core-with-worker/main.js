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
} from "../chunk-2AL6CBL6.js";
import "../chunk-4QD4JCSW.js";
import "../chunk-OVLWB7D2.js";
import "../chunk-WQLBLVMW.js";
import "../chunk-XR4RPZFS.js";
import "../chunk-3JGGT77J.js";
import "../chunk-A4FH7IBN.js";
import "../chunk-BAJFTYMY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-54TKSGFU.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CDVYIJEF.js";
import "../chunk-FGEPO3FI.js";
import "../chunk-A22ORDRC.js";
import "../chunk-JBF7FEQX.js";
import "../chunk-CSN7T5EO.js";
import "../chunk-KY33W52D.js";
import "../chunk-WHSSH6AG.js";
import "../chunk-LKGDQGMS.js";
import "../chunk-OGZHCYPY.js";
import "../chunk-2HMN5TPZ.js";
import "../chunk-H5IPHVRO.js";
import "../chunk-L3LZ3O5L.js";
import "../chunk-N37IVJML.js";
import "../chunk-U24YEMF5.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-2WPPZGNP.js";
import "../chunk-A5NVPALB.js";
import "../chunk-JPZVKJ5X.js";
import "../chunk-NPYPSDRM.js";
import "../chunk-TLOR3QQH.js";
import "../chunk-5R5XDJDK.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5RHXHS6U.js";
import "../chunk-AVIWFNB4.js";
import "../chunk-2FVEG47S.js";
import "../chunk-QWEPBHBP.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-3VS2YENM.js";
import "../chunk-WCE4C2PP.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UKOQHXZK.js";
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
