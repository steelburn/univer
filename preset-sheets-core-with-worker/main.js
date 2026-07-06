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
} from "../chunk-6UAGGQWU.js";
import "../chunk-VOHKTOR2.js";
import "../chunk-4TXTBB7R.js";
import "../chunk-K3EJZOWH.js";
import "../chunk-DQ6RAGLI.js";
import "../chunk-SULFK5ZP.js";
import "../chunk-FQZ46DVA.js";
import "../chunk-A3JV5HVT.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-6CPJKPK2.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-S5GBKS7N.js";
import "../chunk-5ZYYB6QV.js";
import "../chunk-RDP53WAM.js";
import "../chunk-3XWENCEQ.js";
import "../chunk-AXXDQTYB.js";
import "../chunk-4R5LLVR5.js";
import "../chunk-EOVR3T2I.js";
import "../chunk-37N7AXT2.js";
import "../chunk-YYFJ72Q5.js";
import "../chunk-WC3XEGTQ.js";
import "../chunk-NHAWPOVP.js";
import "../chunk-2TZU3TJQ.js";
import "../chunk-3RGJMY5E.js";
import "../chunk-7XIUGZCV.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-4GCGECCX.js";
import "../chunk-UNXW66Y7.js";
import "../chunk-PTLLOLTA.js";
import "../chunk-PHM76AHR.js";
import "../chunk-VOWOKVZU.js";
import "../chunk-YAMWJSB5.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-72V6NIU2.js";
import "../chunk-3TTOIEIC.js";
import "../chunk-2FVEG47S.js";
import "../chunk-FNWLVP5P.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-6RIEYIB7.js";
import "../chunk-2NSFOEHV.js";
import {
  default_default,
  mergeLocales
} from "../chunk-NKLVFE4S.js";
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
