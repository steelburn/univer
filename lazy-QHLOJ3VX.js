import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PRF2IKBE.js";
import "./chunk-QFSZPGGK.js";
import "./chunk-CYSSB7GZ.js";
import "./chunk-7RRRPXVE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PHYCH7W2.js";
import "./chunk-NY6WTFH4.js";
import "./chunk-J37K44IC.js";
import "./chunk-IKEI3MPD.js";
import "./chunk-HDLECXKN.js";
import "./chunk-2CRQQJ6A.js";
import "./chunk-TFRWRFHW.js";
import "./chunk-DZXTHJ7X.js";
import "./chunk-EZGZWPMZ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
