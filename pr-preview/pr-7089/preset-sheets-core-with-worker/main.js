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
} from "../chunk-6NI35F6L.js";
import "../chunk-XERX5WHT.js";
import "../chunk-Q3CTXBEQ.js";
import "../chunk-SEO736EC.js";
import "../chunk-Z5AJHK7I.js";
import "../chunk-VMTMZFMA.js";
import "../chunk-AVNINUDV.js";
import "../chunk-CACPSKCK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-34L2CJVB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-KIYMXMPJ.js";
import "../chunk-AAOCMRB5.js";
import "../chunk-KJRUT5ZQ.js";
import "../chunk-RFRCCIVL.js";
import "../chunk-N74XQLTA.js";
import "../chunk-2FJ5LE46.js";
import "../chunk-PG34B7FK.js";
import "../chunk-GYLC27YO.js";
import "../chunk-RJ5ZMPQ6.js";
import "../chunk-N5MIE4IT.js";
import "../chunk-LYL777Z2.js";
import "../chunk-3BBNCSN5.js";
import "../chunk-UTQ3QUPW.js";
import "../chunk-IWAV5DLX.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KFCCECM5.js";
import "../chunk-2PJVBJU5.js";
import "../chunk-IA2SAE4Q.js";
import "../chunk-E773POYQ.js";
import "../chunk-ND6OWVQZ.js";
import "../chunk-JAWWWCPE.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-PWDVVLTD.js";
import "../chunk-HITDOKBC.js";
import "../chunk-2FVEG47S.js";
import "../chunk-CLK44Y4Q.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-ZJJKBI4V.js";
import "../chunk-CK6DU2KF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-P5KDHCJI.js";
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
