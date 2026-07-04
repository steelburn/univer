import {
  UniverDocsMentionUIPlugin
} from "./chunk-I24YB6XA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-UXLSNNXX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YON75KEF.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IK2VQFTS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-T3IH47YR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ROYXNBIR.js";
import "./chunk-6OHW7JMB.js";
import "./chunk-NFZM2QGT.js";
import "./chunk-CLIMCZGN.js";
import "./chunk-EGI7AS7O.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GIBAD37O.js";
import "./chunk-COH4TLLN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TP455RKZ.js";
import "./chunk-4HEBP4FB.js";
import "./chunk-LMJ37ZZE.js";
import "./chunk-FNWQAIAV.js";
import "./chunk-NHEF2VUB.js";
import "./chunk-PXQ54QE4.js";
import "./chunk-2XSA2LC7.js";
import "./chunk-IGOTXBK6.js";
import "./chunk-NTKRGZ6Y.js";
import "./chunk-LCVHUHN7.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
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
