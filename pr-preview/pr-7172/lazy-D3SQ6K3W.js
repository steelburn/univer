import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7Z43UVQR.js";
import "./chunk-6DW64JZ7.js";
import "./chunk-C6F4SNOR.js";
import "./chunk-Z2NTRMDG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QVECHYK2.js";
import "./chunk-RTHKTSDC.js";
import "./chunk-UM4NOZER.js";
import "./chunk-YVVQNTTI.js";
import "./chunk-HRNSATQF.js";
import "./chunk-ZYQWQPP7.js";
import "./chunk-UQCVZIYI.js";
import "./chunk-OILB55V4.js";
import "./chunk-AQVHF73V.js";
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
