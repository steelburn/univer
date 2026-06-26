import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PUZYYHC2.js";
import "./chunk-ZUNB62OC.js";
import "./chunk-P7PAORB2.js";
import "./chunk-3NIACOMI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VEGYA2J2.js";
import "./chunk-ZGGDB4JA.js";
import "./chunk-SS6EWUSO.js";
import "./chunk-MJIKSOFJ.js";
import "./chunk-6J27KZCS.js";
import "./chunk-CKYJLVLX.js";
import "./chunk-A3IQHLDC.js";
import "./chunk-FFQE2NPY.js";
import "./chunk-JHXES2N3.js";
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
