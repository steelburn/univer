import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FPAA2RTB.js";
import "./chunk-DKCV6UIT.js";
import "./chunk-LAB3P5WS.js";
import "./chunk-DDASKM27.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HMG34QTQ.js";
import "./chunk-WODLW4WL.js";
import "./chunk-R2NUHHOI.js";
import "./chunk-RR6M52SX.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-WMKYTCYP.js";
import "./chunk-4ZVILBEQ.js";
import "./chunk-PD2XMV4N.js";
import "./chunk-AM2UDTII.js";
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
