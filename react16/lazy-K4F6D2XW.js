import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HHFQBLXA.js";
import "./chunk-KWU2VN5P.js";
import "./chunk-MILSMFIB.js";
import "./chunk-HOCNG3UD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BIMHKKRX.js";
import "./chunk-45J2AANX.js";
import "./chunk-O7UOHNOS.js";
import "./chunk-HKBJ7D45.js";
import "./chunk-C7KTYNCZ.js";
import "./chunk-GFE77NE5.js";
import "./chunk-ZZ4GQ3KO.js";
import "./chunk-YC3KISDR.js";
import "./chunk-S6MVWVUZ.js";
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
