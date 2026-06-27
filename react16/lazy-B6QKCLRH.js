import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V7IAZYIG.js";
import "./chunk-GOZC7HS6.js";
import "./chunk-LBL4PQJH.js";
import "./chunk-PJC5Q3Y6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HJ27K5PV.js";
import "./chunk-NN5RA2IS.js";
import "./chunk-PDVUKZV5.js";
import "./chunk-QK3SKOCN.js";
import "./chunk-HRNSATQF.js";
import "./chunk-GCAVSOIP.js";
import "./chunk-AARVXHF2.js";
import "./chunk-ZGHCBBJ6.js";
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
