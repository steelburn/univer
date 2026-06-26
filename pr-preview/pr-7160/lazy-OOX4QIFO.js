import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-O3BHIJGB.js";
import "./chunk-ZUNB62OC.js";
import "./chunk-E3LIOPX2.js";
import "./chunk-3NIACOMI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LZRXG3B5.js";
import "./chunk-XE2ABKMP.js";
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
