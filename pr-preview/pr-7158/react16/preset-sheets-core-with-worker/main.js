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
} from "../chunk-OBAV6CHJ.js";
import "../chunk-XMUAB5VB.js";
import "../chunk-X3IXQS3C.js";
import "../chunk-2HIXI2B2.js";
import "../chunk-ZI56TT6D.js";
import "../chunk-SP2YEG6X.js";
import "../chunk-IR4BRA3F.js";
import "../chunk-CR2NONOM.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-ERBFVEP7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-S3YOZBRI.js";
import "../chunk-OO6JTOVS.js";
import "../chunk-6RD27NTB.js";
import "../chunk-EMZJCOIK.js";
import "../chunk-NVVRBAZO.js";
import "../chunk-BFESU6UO.js";
import "../chunk-UT42V6YZ.js";
import "../chunk-Q5OQIBA7.js";
import "../chunk-UTGOPGUF.js";
import "../chunk-TERCSQJJ.js";
import "../chunk-3NVS5OTH.js";
import "../chunk-7VF3OFQP.js";
import "../chunk-N33KS3FK.js";
import "../chunk-JXYME7A6.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-SPI2A37E.js";
import "../chunk-GNYI2PCU.js";
import "../chunk-MY76AZNU.js";
import "../chunk-WCHRE2AA.js";
import "../chunk-GJMUJ5K6.js";
import "../chunk-TKXIBZ47.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-PSMFCWHY.js";
import "../chunk-5PGZ3OJP.js";
import "../chunk-2FVEG47S.js";
import "../chunk-CKECBHMZ.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-TPXMXN3W.js";
import "../chunk-SZ5VZFJQ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-MLIP4D3Q.js";
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
