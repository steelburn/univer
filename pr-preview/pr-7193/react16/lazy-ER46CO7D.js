import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6WOMAPZP.js";
import "./chunk-C4JCE6R3.js";
import "./chunk-TJO7D5LV.js";
import "./chunk-ZBCVSLQP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BIBCBBJU.js";
import "./chunk-KJYWAHON.js";
import "./chunk-AQXT3JA3.js";
import "./chunk-TN7TFMGX.js";
import "./chunk-2O3VW5NY.js";
import "./chunk-UMKCJXP5.js";
import "./chunk-ZPTY5RQ3.js";
import "./chunk-JS245ZNJ.js";
import "./chunk-3KZPIIDJ.js";
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
