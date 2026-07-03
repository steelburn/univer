import {
  UniverDocsMentionUIPlugin
} from "./chunk-UEYIWZDQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-UKXQDZKC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-T6WHOABO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XVGR4IFX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IRQEIPCC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FRVQO3MT.js";
import "./chunk-DVAH2DEY.js";
import "./chunk-I524Y24B.js";
import "./chunk-6S7LJOUF.js";
import "./chunk-DJKGZ5IE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-V66IWQEN.js";
import "./chunk-JJ7FOJET.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YYEWPWXS.js";
import "./chunk-7M4O4HS2.js";
import "./chunk-2ZJYX7XL.js";
import "./chunk-U2VZ5U2H.js";
import "./chunk-3MZA2Q3T.js";
import "./chunk-4ITOEFIV.js";
import "./chunk-KCGNZNPA.js";
import "./chunk-W2VNWHHA.js";
import "./chunk-NB2AU774.js";
import "./chunk-CJNKPU2H.js";
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
