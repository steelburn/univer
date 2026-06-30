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
} from "../chunk-RYN3NGBV.js";
import "../chunk-OZBTYNPA.js";
import "../chunk-SJX3RG3O.js";
import "../chunk-BPD6K4X5.js";
import "../chunk-DGMUDXL3.js";
import "../chunk-NFJFC5RR.js";
import "../chunk-HZLHLKAS.js";
import "../chunk-UHOLBSIO.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-BKIZ4WJG.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-JP27NK3I.js";
import "../chunk-2VZPQG7V.js";
import "../chunk-6Q2LY6YC.js";
import "../chunk-D2M5HBJG.js";
import "../chunk-JK3I4SZT.js";
import "../chunk-M7CI6FWO.js";
import "../chunk-R572SQR6.js";
import "../chunk-6RTEFWRS.js";
import "../chunk-XJ5O6GIH.js";
import "../chunk-JFCZKNRZ.js";
import "../chunk-WJNYMSGH.js";
import "../chunk-JMVK2T7D.js";
import "../chunk-JPVPGKKO.js";
import "../chunk-D3FNGKGK.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-VWIZNKO7.js";
import "../chunk-KQNC76VW.js";
import "../chunk-WBHCS3SR.js";
import "../chunk-OP4GICEG.js";
import "../chunk-RFOTKZBQ.js";
import "../chunk-G4ASLNLH.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-NHSJ25AF.js";
import "../chunk-P7OEMKO4.js";
import "../chunk-2FVEG47S.js";
import "../chunk-SYN5MVMC.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-HFTONCIN.js";
import "../chunk-XANA7DTY.js";
import {
  default_default,
  mergeLocales
} from "../chunk-IOKMYXS7.js";
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
