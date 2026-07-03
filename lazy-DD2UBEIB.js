import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-T6WHOABO.js";
import "./chunk-DJKGZ5IE.js";
import "./chunk-V66IWQEN.js";
import "./chunk-JJ7FOJET.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YYEWPWXS.js";
import "./chunk-7M4O4HS2.js";
import "./chunk-U2VZ5U2H.js";
import "./chunk-3MZA2Q3T.js";
import "./chunk-4ITOEFIV.js";
import "./chunk-KCGNZNPA.js";
import "./chunk-W2VNWHHA.js";
import "./chunk-NB2AU774.js";
import "./chunk-CJNKPU2H.js";
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
