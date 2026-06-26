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
} from "../chunk-FWRUZSEP.js";
import "../chunk-E6Z3XRPQ.js";
import "../chunk-GQIU5JU7.js";
import "../chunk-CKKCZ2BA.js";
import "../chunk-O3BHIJGB.js";
import "../chunk-2JD62F5M.js";
import "../chunk-KXQ73D3G.js";
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
import "../chunk-ZYIFFCIY.js";
import "../chunk-POCFEA6C.js";
import "../chunk-S45BA7W6.js";
import "../chunk-YEBPZP4G.js";
import "../chunk-RX7XJK7C.js";
import "../chunk-YI7AFNLV.js";
import "../chunk-PQP4LZXK.js";
import "../chunk-4RC7FQ3E.js";
import "../chunk-ZUNB62OC.js";
import "../chunk-E3LIOPX2.js";
import "../chunk-3NIACOMI.js";
import "../chunk-LZRXG3B5.js";
import "../chunk-XE2ABKMP.js";
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
