import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HIWXVUPM.js";
import "./chunk-R5B2DO5Y.js";
import "./chunk-NCYFLCR7.js";
import "./chunk-GW6PM74R.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2EPIF5W3.js";
import "./chunk-C6QJLPQN.js";
import "./chunk-NCUBJCRA.js";
import "./chunk-5TB2ASKP.js";
import "./chunk-JZJILZ4M.js";
import "./chunk-H5SKM2Z2.js";
import "./chunk-57OP3PH6.js";
import "./chunk-UC2YZEOY.js";
import "./chunk-VXRJXEHF.js";
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
