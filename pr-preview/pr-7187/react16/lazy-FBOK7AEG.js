import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GFLUZUWY.js";
import "./chunk-WBXJWUTV.js";
import "./chunk-RRFTDJHZ.js";
import "./chunk-3CUZLJHJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EE3KPUWO.js";
import "./chunk-3KKLHCVI.js";
import "./chunk-A6OGKKA2.js";
import "./chunk-FEXAVOZ3.js";
import "./chunk-LKR2FF62.js";
import "./chunk-3DCU674G.js";
import "./chunk-Z22NX2ZN.js";
import "./chunk-NHJ5OXWA.js";
import "./chunk-UVVCF4V5.js";
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
