import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XNXDNTL4.js";
import "./chunk-U5UIVYHP.js";
import "./chunk-2OJD6WGW.js";
import "./chunk-4KTSUL7F.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IJ45CVVE.js";
import "./chunk-TW7PBWPG.js";
import "./chunk-H2V6DEOX.js";
import "./chunk-OV5I2EGD.js";
import "./chunk-KXYBSBSD.js";
import "./chunk-T6EDKS5T.js";
import "./chunk-BRBIZH26.js";
import "./chunk-ZCW3JLGF.js";
import "./chunk-3DN27AFH.js";
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
