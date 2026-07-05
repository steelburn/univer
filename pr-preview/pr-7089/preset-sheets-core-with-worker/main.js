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
} from "../chunk-O2IZNGX7.js";
import "../chunk-F32JZA2Q.js";
import "../chunk-3WQDUNVS.js";
import "../chunk-OJTXC2CC.js";
import "../chunk-RGWWQLAJ.js";
import "../chunk-5SUVCIBV.js";
import "../chunk-QFLIKRB3.js";
import "../chunk-74HRGHTY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-GYWGSUK4.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ZYQIRO7Z.js";
import "../chunk-S336A72R.js";
import "../chunk-6PCJBONA.js";
import "../chunk-BEB3Y4R7.js";
import "../chunk-V4FJN2XL.js";
import "../chunk-NJJ6T2TH.js";
import "../chunk-TXW4LHIV.js";
import "../chunk-TFJLTCEQ.js";
import "../chunk-CU3K7KBA.js";
import "../chunk-6GAORRQ3.js";
import "../chunk-4SAJOLD5.js";
import "../chunk-7GDM7YVM.js";
import "../chunk-D3W4XGYC.js";
import "../chunk-N4GYHX32.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-MSV3RVRB.js";
import "../chunk-DVEANEMC.js";
import "../chunk-CJXSYORY.js";
import "../chunk-ZKXMP5AB.js";
import "../chunk-EO4JTPVV.js";
import "../chunk-NNYXIEMR.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5RNYM7UN.js";
import "../chunk-UYLUETOS.js";
import "../chunk-2FVEG47S.js";
import "../chunk-KXR54EPN.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-VVSBXURV.js";
import "../chunk-2FMDUAYC.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UGNHOIG6.js";
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
