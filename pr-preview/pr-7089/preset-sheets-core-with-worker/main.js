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
} from "../chunk-ILXRQNPM.js";
import "../chunk-OQH32TKZ.js";
import "../chunk-Z2WSBNLM.js";
import "../chunk-I2ALEIWT.js";
import "../chunk-UNXGHFAS.js";
import "../chunk-QTG3Z7RO.js";
import "../chunk-PSBKWPTS.js";
import "../chunk-XCJISPOV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-NA3REVWF.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-4GXM2FGZ.js";
import "../chunk-Y6CUQFUP.js";
import "../chunk-GGT23WDG.js";
import "../chunk-SHBAEM2T.js";
import "../chunk-SJVB56MI.js";
import "../chunk-B4YULJM7.js";
import "../chunk-IZJT6L4W.js";
import "../chunk-LANH6UQ4.js";
import "../chunk-DFFLGMFY.js";
import "../chunk-D2Q2RCQY.js";
import "../chunk-5IG7NG7J.js";
import "../chunk-KFAKKVKR.js";
import "../chunk-ROYGW75U.js";
import "../chunk-WJK4JVFL.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-Y22Z5ACS.js";
import "../chunk-E2KZ24BH.js";
import "../chunk-3FTWZBGO.js";
import "../chunk-NMAQHIKV.js";
import "../chunk-XUSXRDTA.js";
import "../chunk-7HTXW44V.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-Y2B2TBBI.js";
import "../chunk-C3ZQOYBR.js";
import "../chunk-2FVEG47S.js";
import "../chunk-6A74XRF7.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-4QYAFJVV.js";
import "../chunk-ROLOHZXF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-C554UIRR.js";
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
