import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZI56TT6D.js";
import "./chunk-TERCSQJJ.js";
import "./chunk-3NVS5OTH.js";
import "./chunk-7VF3OFQP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-N33KS3FK.js";
import "./chunk-JXYME7A6.js";
import "./chunk-GJMUJ5K6.js";
import "./chunk-TKXIBZ47.js";
import "./chunk-PSMFCWHY.js";
import "./chunk-5PGZ3OJP.js";
import "./chunk-TPXMXN3W.js";
import "./chunk-SZ5VZFJQ.js";
import "./chunk-MLIP4D3Q.js";
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
