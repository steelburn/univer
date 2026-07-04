import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F7HXJSBW.js";
import "./chunk-ROT7BXSD.js";
import "./chunk-PU6OXUNH.js";
import "./chunk-HG2M4TBP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DP5MPQJ2.js";
import "./chunk-UOBARI5X.js";
import "./chunk-KJTYQ4C6.js";
import "./chunk-7VG27XNI.js";
import "./chunk-TKYGRYPV.js";
import "./chunk-WNULU2PR.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
