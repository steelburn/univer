import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TLVMFGFR.js";
import "./chunk-5ULIT7OO.js";
import "./chunk-VVDBWUG3.js";
import "./chunk-XBC5FNZ2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A52JLQXH.js";
import "./chunk-2BCLHJDF.js";
import "./chunk-5BVBJYD7.js";
import "./chunk-ZT4DTC4C.js";
import "./chunk-KAOBDX34.js";
import "./chunk-VOQNCJT4.js";
import "./chunk-3WUY5WXU.js";
import "./chunk-YIWQ4VME.js";
import "./chunk-QPAXVCAC.js";
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
