import {
  UniverDocsMentionUIPlugin
} from "./chunk-V42FKSM2.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5LE2YIAW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LIZE772N.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CVT6TTVY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GT6PNHC6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OAEHXJ3W.js";
import "./chunk-QNY7CWR4.js";
import "./chunk-A3T3PRC2.js";
import "./chunk-XK57WKI5.js";
import "./chunk-OYSCW6KK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-JLSL4GMX.js";
import "./chunk-AFO5V46B.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AQCG22LR.js";
import "./chunk-CS3UAARQ.js";
import "./chunk-GDA2NUDC.js";
import "./chunk-QCOUDG7P.js";
import "./chunk-YI2R2YWL.js";
import "./chunk-3HUGWSDP.js";
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
