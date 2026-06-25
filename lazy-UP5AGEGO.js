import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KPJWLQAD.js";
import "./chunk-NMTD3QLI.js";
import "./chunk-4WP226ZZ.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UH7434UG.js";
import "./chunk-RLE4C275.js";
import "./chunk-XRC27V2R.js";
import "./chunk-KQ47BPYS.js";
import "./chunk-52K35IRO.js";
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
