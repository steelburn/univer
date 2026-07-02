import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-EYYVPCVY.js";
import "./chunk-TG5VI7XE.js";
import "./chunk-62MBQRPS.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5YHPNAJD.js";
import "./chunk-HCVYW3WN.js";
import "./chunk-VT6VSWAG.js";
import "./chunk-5NAFVRJF.js";
import "./chunk-LIG3MUKA.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
