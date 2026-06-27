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
} from "../chunk-GVNGG4YE.js";
import "../chunk-CS7OQYUX.js";
import "../chunk-PZXRZ3HV.js";
import "../chunk-HX6JZY4I.js";
import "../chunk-F56BQP77.js";
import "../chunk-NX2G6F2I.js";
import "../chunk-NSCWDZXB.js";
import "../chunk-ZBCCT65O.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-FIY4BR7H.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-PS42KNKU.js";
import "../chunk-YRDASUPB.js";
import "../chunk-S6IFZBH4.js";
import "../chunk-MTGDBNJZ.js";
import "../chunk-3JSEUWW5.js";
import "../chunk-ZU4K3R4L.js";
import "../chunk-DDPB3VUB.js";
import "../chunk-HFJ5CWFB.js";
import "../chunk-ZW23EQ2H.js";
import "../chunk-7CHCFVF4.js";
import "../chunk-TORCEFV5.js";
import "../chunk-XYJ6XNVQ.js";
import "../chunk-EJT77ZBG.js";
import "../chunk-2SFFFFBJ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-AF67M77R.js";
import "../chunk-COLOREO7.js";
import "../chunk-RZF6RDEO.js";
import "../chunk-JM4QEXQY.js";
import "../chunk-XT7ZGLUQ.js";
import "../chunk-YKE4JHR7.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GPI5PFDL.js";
import "../chunk-IOTQISKE.js";
import "../chunk-2FVEG47S.js";
import "../chunk-PSKEMIPC.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-7BFDWMZU.js";
import "../chunk-FTAHREJU.js";
import {
  default_default,
  mergeLocales
} from "../chunk-3BIMVDWB.js";
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
