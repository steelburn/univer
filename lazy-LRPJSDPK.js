import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MOWA3K4Z.js";
import "./chunk-BD7INVQP.js";
import "./chunk-2T4LHTPF.js";
import "./chunk-KZBHPHNR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RGUDOGVG.js";
import "./chunk-ZPIFMXX3.js";
import "./chunk-BMTDMI2S.js";
import "./chunk-RV5HGSLX.js";
import "./chunk-M3TRFQLV.js";
import "./chunk-FVCNQDUO.js";
import "./chunk-EDVR2PND.js";
import "./chunk-JT4UYYTA.js";
import "./chunk-H64B2WDJ.js";
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
