import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-B37NLZO3.js";
import "./chunk-VNY7SZ2G.js";
import "./chunk-RIV26ZAQ.js";
import "./chunk-PG7FNUSK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EAYEQJ4J.js";
import "./chunk-GQEKXTHQ.js";
import "./chunk-2JOIDZXJ.js";
import "./chunk-U3S5TFOV.js";
import "./chunk-KBDFGRW6.js";
import "./chunk-3XVATOG6.js";
import "./chunk-7MAGD6AG.js";
import "./chunk-65ZVRLT5.js";
import "./chunk-LM6KX6ET.js";
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
