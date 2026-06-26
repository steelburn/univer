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
} from "../chunk-TTC742DQ.js";
import "../chunk-H4D4WHFT.js";
import "../chunk-5MRFPYGN.js";
import "../chunk-QIVXAGWC.js";
import "../chunk-PUZYYHC2.js";
import "../chunk-4JA2CW4P.js";
import "../chunk-RQCGW3OB.js";
import "../chunk-HEAJQLZK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-JI56TSWD.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3SZXWTZU.js";
import "../chunk-LEEV7BPR.js";
import "../chunk-7P3JPMT5.js";
import "../chunk-S45BA7W6.js";
import "../chunk-YEBPZP4G.js";
import "../chunk-RX7XJK7C.js";
import "../chunk-YI7AFNLV.js";
import "../chunk-R5ELJ6CB.js";
import "../chunk-4RC7FQ3E.js";
import "../chunk-ZUNB62OC.js";
import "../chunk-P7PAORB2.js";
import "../chunk-3NIACOMI.js";
import "../chunk-VEGYA2J2.js";
import "../chunk-ZGGDB4JA.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-K3FGN4IB.js";
import "../chunk-RVKA256F.js";
import "../chunk-HCGJMVVM.js";
import "../chunk-FRFT7YG4.js";
import "../chunk-SS6EWUSO.js";
import "../chunk-MJIKSOFJ.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-6J27KZCS.js";
import "../chunk-CKYJLVLX.js";
import "../chunk-2FVEG47S.js";
import "../chunk-3EB7TTBB.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-A3IQHLDC.js";
import "../chunk-FFQE2NPY.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JHXES2N3.js";
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
