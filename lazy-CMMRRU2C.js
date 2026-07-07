import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VFXBM4W7.js";
import "./chunk-XGUKHRYW.js";
import "./chunk-WW4LPWLF.js";
import "./chunk-5I2CJEUN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JJUIGY5K.js";
import "./chunk-XVYLP3GF.js";
import "./chunk-PXHBEZNC.js";
import "./chunk-UYAWZQ7D.js";
import "./chunk-K7QVM4VQ.js";
import "./chunk-UUXCCQDN.js";
import "./chunk-YGL77P23.js";
import "./chunk-UZB6LHUM.js";
import "./chunk-QJESARYQ.js";
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
