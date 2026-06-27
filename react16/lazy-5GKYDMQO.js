import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LLMCMKHM.js";
import "./chunk-LZSOEVEI.js";
import "./chunk-TE35DJYS.js";
import "./chunk-C6CJVXNI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5BRFBFTR.js";
import "./chunk-PJTMITJH.js";
import "./chunk-4PO5VQGQ.js";
import "./chunk-HWL2O7ZV.js";
import "./chunk-HDLECXKN.js";
import "./chunk-BQSW6T44.js";
import "./chunk-JA4IFPKI.js";
import "./chunk-XSMQZID2.js";
import "./chunk-EZGZWPMZ.js";
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
