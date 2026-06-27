import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RJQ7PIDM.js";
import "./chunk-6CLVDI6D.js";
import "./chunk-LSGVOUI4.js";
import "./chunk-TB5G4PNE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SAGL4BN6.js";
import "./chunk-L34UUFNM.js";
import "./chunk-L4S74WID.js";
import "./chunk-M5GVC7ON.js";
import "./chunk-ANUQL4BY.js";
import "./chunk-NG4STN57.js";
import "./chunk-SAPNNB2H.js";
import "./chunk-QKZFJOI6.js";
import "./chunk-NMSWDVJS.js";
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
