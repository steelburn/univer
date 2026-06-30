import {
  UniverDocsMentionUIPlugin
} from "./chunk-SQEU3IBJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MQBMSCLP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LLMCMKHM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OY4SZD3M.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZBWZAS3K.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GOYTGSAS.js";
import "./chunk-C6FIAXG5.js";
import "./chunk-GXB2TM44.js";
import "./chunk-6RJDLZIZ.js";
import "./chunk-LZSOEVEI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TE35DJYS.js";
import "./chunk-C6CJVXNI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5BRFBFTR.js";
import "./chunk-PJTMITJH.js";
import "./chunk-XQE6PPMO.js";
import "./chunk-4PO5VQGQ.js";
import "./chunk-HWL2O7ZV.js";
import "./chunk-HDLECXKN.js";
import "./chunk-BQSW6T44.js";
import "./chunk-JA4IFPKI.js";
import "./chunk-XSMQZID2.js";
import "./chunk-EZGZWPMZ.js";
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
