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
} from "../chunk-AQK3IM6V.js";
import "../chunk-Z4L4OCX4.js";
import "../chunk-MCVC7D6A.js";
import "../chunk-YJ3TSA6H.js";
import "../chunk-GGBH7XNI.js";
import "../chunk-OMM4WR6Q.js";
import "../chunk-O4BHW4JP.js";
import "../chunk-BGLNA63Z.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PVFU7UMS.js";
import {
  createUniver
} from "../chunk-YS4WQDEC.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-MVJUZ2RL.js";
import "../chunk-7DPFNKKR.js";
import "../chunk-KW72GFI3.js";
import "../chunk-NZS5OV26.js";
import "../chunk-MNYMZVV2.js";
import "../chunk-5YJOA4L7.js";
import "../chunk-JTHLG3U3.js";
import "../chunk-PZODQO3F.js";
import "../chunk-WQGB73FZ.js";
import "../chunk-GFDOKAZY.js";
import "../chunk-GLYVBXWL.js";
import "../chunk-HCWYKH27.js";
import "../chunk-NIVGGNXK.js";
import "../chunk-JKXKREPW.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-C5AARPEF.js";
import "../chunk-UGCUHWAI.js";
import "../chunk-IJQYQ7JF.js";
import "../chunk-VAF6RY7S.js";
import "../chunk-3S4UFDZZ.js";
import "../chunk-RYDZUMMQ.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-D4NC5GSO.js";
import "../chunk-ZKOOUDQJ.js";
import "../chunk-2FVEG47S.js";
import "../chunk-EECT4QBM.js";
import "../chunk-YTTBVE7U.js";
import "../chunk-F77LJMQC.js";
import "../chunk-6P4JMQYP.js";
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
