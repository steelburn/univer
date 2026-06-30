import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DUW5E2ZO.js";
import "./chunk-D2Q2RCQY.js";
import "./chunk-OTDGSBI6.js";
import "./chunk-KFAKKVKR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5PRAOZGF.js";
import "./chunk-FCZOVYFF.js";
import "./chunk-GGLAE6FN.js";
import "./chunk-WB4OG647.js";
import "./chunk-X254Q5T7.js";
import "./chunk-C3ZQOYBR.js";
import "./chunk-4QYAFJVV.js";
import "./chunk-ROLOHZXF.js";
import "./chunk-C554UIRR.js";
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
