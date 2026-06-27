import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZTDXW47E.js";
import "./chunk-UHU2FD36.js";
import "./chunk-37INZUHB.js";
import "./chunk-2W2YVYGR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OP2S3SPG.js";
import "./chunk-IO37G2BN.js";
import "./chunk-HGUGJM6X.js";
import "./chunk-OK3SPPRM.js";
import "./chunk-GPI5PFDL.js";
import "./chunk-V6ZAAAD2.js";
import "./chunk-K63MPEPW.js";
import "./chunk-W7DFTLNN.js";
import "./chunk-3BIMVDWB.js";
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
