import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KJ5QJNMU.js";
import "./chunk-WBXJWUTV.js";
import "./chunk-ZI65MXM3.js";
import "./chunk-3CUZLJHJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WVPI3FH5.js";
import "./chunk-KEURRPB4.js";
import "./chunk-A6OGKKA2.js";
import "./chunk-FEXAVOZ3.js";
import "./chunk-LKR2FF62.js";
import "./chunk-3DCU674G.js";
import "./chunk-Z22NX2ZN.js";
import "./chunk-NHJ5OXWA.js";
import "./chunk-UVVCF4V5.js";
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
