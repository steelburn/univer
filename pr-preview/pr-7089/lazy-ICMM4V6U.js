import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RGWWQLAJ.js";
import "./chunk-6GAORRQ3.js";
import "./chunk-4SAJOLD5.js";
import "./chunk-7GDM7YVM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D3W4XGYC.js";
import "./chunk-N4GYHX32.js";
import "./chunk-EO4JTPVV.js";
import "./chunk-NNYXIEMR.js";
import "./chunk-5RNYM7UN.js";
import "./chunk-UYLUETOS.js";
import "./chunk-VVSBXURV.js";
import "./chunk-2FMDUAYC.js";
import "./chunk-UGNHOIG6.js";
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
