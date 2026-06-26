import {
  UniverDocsMentionUIPlugin
} from "./chunk-5EN6WWEX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-X3IXQS3C.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZI56TT6D.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-SP2YEG6X.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IR4BRA3F.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CR2NONOM.js";
import "./chunk-EMZJCOIK.js";
import "./chunk-BFESU6UO.js";
import "./chunk-UTGOPGUF.js";
import "./chunk-TERCSQJJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3NVS5OTH.js";
import "./chunk-7VF3OFQP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-N33KS3FK.js";
import "./chunk-JXYME7A6.js";
import "./chunk-WCHRE2AA.js";
import "./chunk-GJMUJ5K6.js";
import "./chunk-TKXIBZ47.js";
import "./chunk-PSMFCWHY.js";
import "./chunk-5PGZ3OJP.js";
import "./chunk-TPXMXN3W.js";
import "./chunk-SZ5VZFJQ.js";
import "./chunk-MLIP4D3Q.js";
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
