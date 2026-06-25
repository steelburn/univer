import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BBPOOW6N.js";
import "./chunk-S7IYDQRZ.js";
import "./chunk-6VYPUTXK.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VKTC6UB5.js";
import "./chunk-M6GW23CP.js";
import "./chunk-EK3P3N73.js";
import "./chunk-LONSY6T7.js";
import "./chunk-HPSPOCG5.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
