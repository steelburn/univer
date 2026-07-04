import {
  UniverDocsMentionUIPlugin
} from "./chunk-DJT7U724.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-N2UM2OUR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LI3PDK77.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ALJAH4AM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3PUEH46Q.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4AV5I6QD.js";
import "./chunk-QNY7CWR4.js";
import "./chunk-A3T3PRC2.js";
import "./chunk-XK57WKI5.js";
import "./chunk-OYSCW6KK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KMFJ52GM.js";
import "./chunk-AFO5V46B.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SGTCDODZ.js";
import "./chunk-G4YFO5AG.js";
import "./chunk-GDA2NUDC.js";
import "./chunk-BMZINYYZ.js";
import "./chunk-6I76BXXC.js";
import "./chunk-R5LDF4DG.js";
import "./chunk-6W76PZHA.js";
import "./chunk-3NID2K3K.js";
import "./chunk-EMXII5U6.js";
import "./chunk-6F7TJWHX.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
