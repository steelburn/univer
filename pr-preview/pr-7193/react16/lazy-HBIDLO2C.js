import {
  UniverDocsMentionUIPlugin
} from "./chunk-LH2X2TLE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-V2D4TBQZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6WOMAPZP.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TRWSGIEZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6DJRDB5A.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4ISJUNGW.js";
import "./chunk-TXIA2IAD.js";
import "./chunk-O23MQGQO.js";
import "./chunk-UWNRN27X.js";
import "./chunk-C4JCE6R3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TJO7D5LV.js";
import "./chunk-ZBCVSLQP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BIBCBBJU.js";
import "./chunk-KJYWAHON.js";
import "./chunk-SMX5JMJQ.js";
import "./chunk-AQXT3JA3.js";
import "./chunk-TN7TFMGX.js";
import "./chunk-2O3VW5NY.js";
import "./chunk-UMKCJXP5.js";
import "./chunk-ZPTY5RQ3.js";
import "./chunk-JS245ZNJ.js";
import "./chunk-3KZPIIDJ.js";
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
