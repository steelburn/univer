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
} from "../chunk-GM3M6BVI.js";
import "../chunk-QEYIHBBX.js";
import "../chunk-MVNYWYXU.js";
import "../chunk-Y7EFCBVO.js";
import "../chunk-7Z43UVQR.js";
import "../chunk-MW7JLDDX.js";
import "../chunk-FZLYHWCL.js";
import "../chunk-5G2NVEEJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-PRWE46AG.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-I7ARNDHH.js";
import "../chunk-GMXVHCFY.js";
import "../chunk-WRS7ESG6.js";
import "../chunk-ZUXBNEMK.js";
import "../chunk-FA4NEUSB.js";
import "../chunk-AQNRTCI5.js";
import "../chunk-QYRZCRUN.js";
import "../chunk-3HJKYIMU.js";
import "../chunk-NKSRF3PJ.js";
import "../chunk-6DW64JZ7.js";
import "../chunk-C6F4SNOR.js";
import "../chunk-Z2NTRMDG.js";
import "../chunk-QVECHYK2.js";
import "../chunk-RTHKTSDC.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-FBHSQCZE.js";
import "../chunk-UORMHJJL.js";
import "../chunk-GVDWRJTX.js";
import "../chunk-H6OXEYL5.js";
import "../chunk-UM4NOZER.js";
import "../chunk-YVVQNTTI.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-HRNSATQF.js";
import "../chunk-ZYQWQPP7.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FGDU2BZX.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-UQCVZIYI.js";
import "../chunk-OILB55V4.js";
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
