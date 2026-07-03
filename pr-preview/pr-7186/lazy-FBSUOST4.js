import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PF3MQFIR.js";
import "./chunk-DJKGZ5IE.js";
import "./chunk-QXQBAOVG.js";
import "./chunk-JJ7FOJET.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RIOOBV5P.js";
import "./chunk-JDGIEI4U.js";
import "./chunk-KMJ2E3CW.js";
import "./chunk-PYMM6LSK.js";
import "./chunk-IAO6ELBM.js";
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
