import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F56BQP77.js";
import "./chunk-7CHCFVF4.js";
import "./chunk-TORCEFV5.js";
import "./chunk-XYJ6XNVQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EJT77ZBG.js";
import "./chunk-2SFFFFBJ.js";
import "./chunk-XT7ZGLUQ.js";
import "./chunk-YKE4JHR7.js";
import "./chunk-GPI5PFDL.js";
import "./chunk-IOTQISKE.js";
import "./chunk-7BFDWMZU.js";
import "./chunk-FTAHREJU.js";
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
