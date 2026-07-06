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
} from "../chunk-HTJMQQY5.js";
import "../chunk-O2SCRTR4.js";
import "../chunk-JTXYG4P6.js";
import "../chunk-EVRQAVSS.js";
import "../chunk-HIWXVUPM.js";
import "../chunk-YKITTWEJ.js";
import "../chunk-VOWH46YM.js";
import "../chunk-3B4FBGZJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-UZJDDF7M.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-MNP3O7LS.js";
import "../chunk-HWH55ZUM.js";
import "../chunk-WUFLESU2.js";
import "../chunk-XZLS3BMB.js";
import "../chunk-IVF7I7YR.js";
import "../chunk-4ZJMVMS7.js";
import "../chunk-Z4SGSOU7.js";
import "../chunk-DIPTLWST.js";
import "../chunk-GXYMTZNO.js";
import "../chunk-R5B2DO5Y.js";
import "../chunk-NCYFLCR7.js";
import "../chunk-GW6PM74R.js";
import "../chunk-2EPIF5W3.js";
import "../chunk-C6QJLPQN.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-V7WYXVHF.js";
import "../chunk-LIDNKXAA.js";
import "../chunk-Y7G4HNFT.js";
import "../chunk-DGIFAPUD.js";
import "../chunk-NCUBJCRA.js";
import "../chunk-5TB2ASKP.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-JZJILZ4M.js";
import "../chunk-H5SKM2Z2.js";
import "../chunk-2FVEG47S.js";
import "../chunk-3J62SAS5.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-57OP3PH6.js";
import "../chunk-UC2YZEOY.js";
import {
  default_default,
  mergeLocales
} from "../chunk-VXRJXEHF.js";
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
