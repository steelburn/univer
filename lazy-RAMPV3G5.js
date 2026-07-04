import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LI3PDK77.js";
import "./chunk-OYSCW6KK.js";
import "./chunk-KMFJ52GM.js";
import "./chunk-AFO5V46B.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SGTCDODZ.js";
import "./chunk-G4YFO5AG.js";
import "./chunk-BMZINYYZ.js";
import "./chunk-6I76BXXC.js";
import "./chunk-R5LDF4DG.js";
import "./chunk-6W76PZHA.js";
import "./chunk-3NID2K3K.js";
import "./chunk-EMXII5U6.js";
import "./chunk-6F7TJWHX.js";
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
