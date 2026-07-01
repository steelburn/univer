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
} from "../chunk-BOPPKAJY.js";
import "../chunk-SSHRXPHJ.js";
import "../chunk-SWEYUONJ.js";
import "../chunk-QYVYZFQ2.js";
import "../chunk-UL6UEUG7.js";
import "../chunk-WI23KKFU.js";
import "../chunk-F237ELO2.js";
import "../chunk-PEVXETMX.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-UHW5SHE7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-4Y6GUTJK.js";
import "../chunk-RK3SFNUP.js";
import "../chunk-4SWMHONP.js";
import "../chunk-H6IKFNUB.js";
import "../chunk-47CGWQKF.js";
import "../chunk-W75Y7QEW.js";
import "../chunk-4SREX2CE.js";
import "../chunk-ATKMNU2I.js";
import "../chunk-LBKVQ5E5.js";
import "../chunk-TG5VI7XE.js";
import "../chunk-76HRO4WL.js";
import "../chunk-LSASRAKL.js";
import "../chunk-2PINCHST.js";
import "../chunk-MTZKB6MX.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-65XUPAY2.js";
import "../chunk-YIILNNZG.js";
import "../chunk-KRCO7RP4.js";
import "../chunk-NPMILPK4.js";
import "../chunk-XNWWFZB2.js";
import "../chunk-VQAEIINW.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-LIG3MUKA.js";
import "../chunk-IGRQIP3D.js";
import "../chunk-2FVEG47S.js";
import "../chunk-VD3VFPFT.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-MWE37INK.js";
import "../chunk-5WHMUGXX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-TEI2QFPC.js";
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
