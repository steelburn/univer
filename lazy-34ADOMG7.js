import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OAVUROA7.js";
import "./chunk-KWU2VN5P.js";
import "./chunk-IVPT3EY7.js";
import "./chunk-HOCNG3UD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-L64RJH2T.js";
import "./chunk-G4H3SV5A.js";
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
