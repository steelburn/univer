import {
  UniverDocsMentionUIPlugin
} from "./chunk-HSQQJXPZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4XSH7XPL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PRF2IKBE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YL6TTMMA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VYNSTJB7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WEA3Q7NY.js";
import "./chunk-3MNTIG4X.js";
import "./chunk-RCWWIC46.js";
import "./chunk-AZCEA4BW.js";
import "./chunk-QFSZPGGK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CYSSB7GZ.js";
import "./chunk-7RRRPXVE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PHYCH7W2.js";
import "./chunk-NY6WTFH4.js";
import "./chunk-XQE6PPMO.js";
import "./chunk-J37K44IC.js";
import "./chunk-IKEI3MPD.js";
import "./chunk-HDLECXKN.js";
import "./chunk-2CRQQJ6A.js";
import "./chunk-TFRWRFHW.js";
import "./chunk-DZXTHJ7X.js";
import "./chunk-EZGZWPMZ.js";
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
