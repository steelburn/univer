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
} from "../chunk-UBJIFE5P.js";
import "../chunk-EE5KUVZH.js";
import "../chunk-NWXENKHB.js";
import "../chunk-T5GPXJQ7.js";
import "../chunk-AIREBQ5K.js";
import "../chunk-FXQAWNC7.js";
import "../chunk-JMEIS6MP.js";
import "../chunk-3YXQW6JW.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-YS4WQDEC.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-J22ITUCO.js";
import "../chunk-MYLMYQ5H.js";
import "../chunk-AWDR467U.js";
import "../chunk-2RIRF74O.js";
import "../chunk-AROJKGGN.js";
import "../chunk-JYPQW52O.js";
import "../chunk-JTHLG3U3.js";
import "../chunk-QPSOVYBI.js";
import "../chunk-N55QRDMN.js";
import "../chunk-KCKEB4IG.js";
import "../chunk-6RQ2HL64.js";
import "../chunk-UE7VRHMB.js";
import "../chunk-SW6NDM5N.js";
import "../chunk-37PGBMEZ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-C5AARPEF.js";
import "../chunk-UGCUHWAI.js";
import "../chunk-KJTUUNOI.js";
import "../chunk-VAF6RY7S.js";
import "../chunk-TQ4Q34OY.js";
import "../chunk-ROJLKGUP.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-D4NC5GSO.js";
import "../chunk-2E7K7WJG.js";
import "../chunk-2FVEG47S.js";
import "../chunk-EECT4QBM.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-AWTJ57BU.js";
import "../chunk-4MD24DFJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-2OKSGSKY.js";
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
