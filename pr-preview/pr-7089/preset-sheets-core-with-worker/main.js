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
} from "../chunk-XOMDCRSC.js";
import "../chunk-UBVSXJCO.js";
import "../chunk-C4RF6XSR.js";
import "../chunk-I2NMPIY5.js";
import "../chunk-436ZQXJL.js";
import "../chunk-FRL6RKWU.js";
import "../chunk-ZIZUADQT.js";
import "../chunk-6VTYCSRK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-VGFAHMIX.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-VVCDHPF3.js";
import "../chunk-5US4NH2L.js";
import "../chunk-EYZ65XCE.js";
import "../chunk-UPMFLJAE.js";
import "../chunk-HQANYSJ2.js";
import "../chunk-X6XOYRVX.js";
import "../chunk-RG5KMJQN.js";
import "../chunk-HUNJZ4TH.js";
import "../chunk-PUQSMTNK.js";
import "../chunk-KLCIQCV2.js";
import "../chunk-JON46KA2.js";
import "../chunk-3FAPUKMB.js";
import "../chunk-NGNEGYS4.js";
import "../chunk-RSE4XJ65.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-6CC75HBB.js";
import "../chunk-B7NCITP5.js";
import "../chunk-2BLR3RWD.js";
import "../chunk-F3GIICXC.js";
import "../chunk-KWWXQZKE.js";
import "../chunk-PYZPGY5B.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-QNYCEYFA.js";
import "../chunk-7OKPYA37.js";
import "../chunk-2FVEG47S.js";
import "../chunk-LDR5HMSP.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-IPR36F56.js";
import "../chunk-P3BUXCOC.js";
import {
  default_default,
  mergeLocales
} from "../chunk-B4VGFPLO.js";
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
