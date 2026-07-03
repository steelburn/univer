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
} from "../chunk-64HY5Y2N.js";
import "../chunk-2GPHHGOQ.js";
import "../chunk-XSTHQGPJ.js";
import "../chunk-TNCMW3KS.js";
import "../chunk-UGFAKDEY.js";
import "../chunk-EJQBSCPY.js";
import "../chunk-WTMUP264.js";
import "../chunk-4ZMC7QHQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-54TKSGFU.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6UH5WRGL.js";
import "../chunk-RWFJIYCN.js";
import "../chunk-V2SPIRRW.js";
import "../chunk-JBF7FEQX.js";
import "../chunk-CSN7T5EO.js";
import "../chunk-KY33W52D.js";
import "../chunk-WK6HIUZ7.js";
import "../chunk-DNPPNNOV.js";
import "../chunk-OGZHCYPY.js";
import "../chunk-2HMN5TPZ.js";
import "../chunk-WRGFJEAK.js";
import "../chunk-L3LZ3O5L.js";
import "../chunk-FFYNRHRC.js";
import "../chunk-PQFL3CAG.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-2WPPZGNP.js";
import "../chunk-A5NVPALB.js";
import "../chunk-57GM7YHV.js";
import "../chunk-NPYPSDRM.js";
import "../chunk-5C6CNY2L.js";
import "../chunk-C4DUVGK5.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-B6YQ7SMI.js";
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
