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
} from "../chunk-IHZXBL36.js";
import "../chunk-6BWGX4X3.js";
import "../chunk-G6GSOQUU.js";
import "../chunk-ZZJAZMKN.js";
import "../chunk-TF6XIFGF.js";
import "../chunk-IZJKZ42O.js";
import "../chunk-LMKSFCPX.js";
import "../chunk-WD4AFTTE.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-HYQJX7KT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-PCC6OE55.js";
import "../chunk-K4YDDW3V.js";
import "../chunk-UHLZ7DZX.js";
import "../chunk-POS3EV2I.js";
import "../chunk-HFGHCY2Y.js";
import "../chunk-CKA5M3FJ.js";
import "../chunk-XSOX5HRX.js";
import "../chunk-XOG2FXSC.js";
import "../chunk-QW266UJ5.js";
import "../chunk-DWXWTDAX.js";
import "../chunk-6WTSA2HN.js";
import "../chunk-IUBPC6M3.js";
import "../chunk-DHDDXST2.js";
import "../chunk-F46TSK5L.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KQNVO4KD.js";
import "../chunk-UPUZUEZ3.js";
import "../chunk-P3K4GCHQ.js";
import "../chunk-6PIPBXM2.js";
import "../chunk-QJ2KMZRK.js";
import "../chunk-S4C336VJ.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-H3L5AYK5.js";
import "../chunk-QBYSMQUM.js";
import "../chunk-2FVEG47S.js";
import "../chunk-5K7IENYW.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-3JTM5TRL.js";
import "../chunk-6ZMAA6SO.js";
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
