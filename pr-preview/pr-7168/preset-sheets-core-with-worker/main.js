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
} from "../chunk-NPXQPCYU.js";
import "../chunk-BRQTD34G.js";
import "../chunk-GSEIQLCP.js";
import "../chunk-GOGMQITQ.js";
import "../chunk-V7IAZYIG.js";
import "../chunk-ZU2PXV7Q.js";
import "../chunk-EYES5V7T.js";
import "../chunk-5335NU4L.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-PRWE46AG.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-PIT7SCDY.js";
import "../chunk-EX2ECF3S.js";
import "../chunk-ASET3SEV.js";
import "../chunk-YESG7SZL.js";
import "../chunk-GXFEQBBI.js";
import "../chunk-LXHTE2L3.js";
import "../chunk-QYRZCRUN.js";
import "../chunk-RER4WIKX.js";
import "../chunk-VFBTU3R4.js";
import "../chunk-GOZC7HS6.js";
import "../chunk-LBL4PQJH.js";
import "../chunk-PJC5Q3Y6.js";
import "../chunk-HJ27K5PV.js";
import "../chunk-NN5RA2IS.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-FBHSQCZE.js";
import "../chunk-UORMHJJL.js";
import "../chunk-ZYZOHY7Z.js";
import "../chunk-H6OXEYL5.js";
import "../chunk-PDVUKZV5.js";
import "../chunk-QK3SKOCN.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-HRNSATQF.js";
import "../chunk-GCAVSOIP.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FGDU2BZX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-AARVXHF2.js";
import "../chunk-ZGHCBBJ6.js";
import {
  default_default,
  mergeLocales
} from "../chunk-AQVHF73V.js";
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
