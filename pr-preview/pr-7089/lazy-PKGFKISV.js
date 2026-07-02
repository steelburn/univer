import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZB2HHRV4.js";
import "./chunk-DMK2CYLZ.js";
import "./chunk-OH6SBI3P.js";
import "./chunk-E3T2GBVQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZBCIYAJ4.js";
import "./chunk-CQH5VARC.js";
import "./chunk-EYNWJNDH.js";
import "./chunk-5DMPCEVV.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-ROUCSG5T.js";
import "./chunk-LS2SSBVE.js";
import "./chunk-M6JMRJSB.js";
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
