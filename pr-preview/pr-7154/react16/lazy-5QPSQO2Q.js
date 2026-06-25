import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6U2GWWI5.js";
import "./chunk-S7IYDQRZ.js";
import "./chunk-M2HIO4NK.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OGZUADGA.js";
import "./chunk-PNBDI5JL.js";
import "./chunk-Y2EKGZ26.js";
import "./chunk-NSZNDFWI.js";
import "./chunk-AGKL5WLT.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
