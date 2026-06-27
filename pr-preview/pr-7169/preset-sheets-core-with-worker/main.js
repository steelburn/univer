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
} from "../chunk-JSJCGSVD.js";
import "../chunk-6SBXKWFC.js";
import "../chunk-4NHTFTYY.js";
import "../chunk-LZZCVPQT.js";
import "../chunk-RJQ7PIDM.js";
import "../chunk-V7AEJ6RT.js";
import "../chunk-N7H56FM6.js";
import "../chunk-V6MDNJVG.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-5QCQMIPQ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-AJL5HSLU.js";
import "../chunk-7TEJUEBH.js";
import "../chunk-ZR6C5QV4.js";
import "../chunk-SBPWLSI7.js";
import "../chunk-ILYOC5V7.js";
import "../chunk-TJQFCLC3.js";
import "../chunk-QSAB65NY.js";
import "../chunk-DCYGWSIN.js";
import "../chunk-Y4YKRG2S.js";
import "../chunk-6CLVDI6D.js";
import "../chunk-LSGVOUI4.js";
import "../chunk-TB5G4PNE.js";
import "../chunk-SAGL4BN6.js";
import "../chunk-L34UUFNM.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-6TPU6S5P.js";
import "../chunk-3CJKZIPV.js";
import "../chunk-DYLGZ22O.js";
import "../chunk-LF4TJ2IQ.js";
import "../chunk-L4S74WID.js";
import "../chunk-M5GVC7ON.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ANUQL4BY.js";
import "../chunk-NG4STN57.js";
import "../chunk-2FVEG47S.js";
import "../chunk-BICC77UV.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-SAPNNB2H.js";
import "../chunk-QKZFJOI6.js";
import {
  default_default,
  mergeLocales
} from "../chunk-NMSWDVJS.js";
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
