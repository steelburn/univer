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
} from "../chunk-YVJTQOHP.js";
import "../chunk-O6BDLWEZ.js";
import "../chunk-2S5U37Y6.js";
import "../chunk-FBT43C2V.js";
import "../chunk-NJQNPKRD.js";
import "../chunk-TA3YVGEM.js";
import "../chunk-EJGXZY7A.js";
import "../chunk-VS5OMID2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-PCJP4G2Q.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-BD6DCNSI.js";
import "../chunk-MWIXBZHD.js";
import "../chunk-4CJPWJGV.js";
import "../chunk-HZ7XYXYM.js";
import "../chunk-LI5J4DCL.js";
import "../chunk-GAAEMWEP.js";
import "../chunk-WIILU2S2.js";
import "../chunk-VNK7H47K.js";
import "../chunk-WXPPSNAL.js";
import "../chunk-XTBQNKU3.js";
import "../chunk-EISAZCUD.js";
import "../chunk-XKV6PVIN.js";
import "../chunk-YNXSA36Q.js";
import "../chunk-UGYUBKCY.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-D2VZIHGA.js";
import "../chunk-YJA26Q7G.js";
import "../chunk-F2DPW75V.js";
import "../chunk-2QNOHHER.js";
import "../chunk-STCQE6Z4.js";
import "../chunk-EITKUHJA.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-QFN5BPXT.js";
import "../chunk-Z7BTC3XM.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FVHQND5F.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-4YXP2MPR.js";
import "../chunk-Y6A4QOBR.js";
import {
  default_default,
  mergeLocales
} from "../chunk-FBCWWWX3.js";
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
