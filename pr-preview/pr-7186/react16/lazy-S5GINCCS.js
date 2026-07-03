import {
  UniverDocsMentionUIPlugin
} from "./chunk-DD5XUMTK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-G4QQTXJB.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PF3MQFIR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-EXTECZHH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OJWRN2YZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NGBHMULY.js";
import "./chunk-DVAH2DEY.js";
import "./chunk-I524Y24B.js";
import "./chunk-6S7LJOUF.js";
import "./chunk-DJKGZ5IE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QXQBAOVG.js";
import "./chunk-JJ7FOJET.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RIOOBV5P.js";
import "./chunk-JDGIEI4U.js";
import "./chunk-2ZJYX7XL.js";
import "./chunk-KMJ2E3CW.js";
import "./chunk-PYMM6LSK.js";
import "./chunk-IAO6ELBM.js";
import "./chunk-KCGNZNPA.js";
import "./chunk-W2VNWHHA.js";
import "./chunk-NB2AU774.js";
import "./chunk-CJNKPU2H.js";
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
