import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TUVEGPYH.js";
import "./chunk-UWQCDZP4.js";
import "./chunk-4GPSW7WW.js";
import "./chunk-VPOPJAKE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WKMXKJ4U.js";
import "./chunk-TMXBBFQG.js";
import "./chunk-EGY4MQGY.js";
import "./chunk-HVYBSRJX.js";
import "./chunk-7CLHRL5D.js";
import "./chunk-3ONFBMGU.js";
import "./chunk-4YRUDHBP.js";
import "./chunk-VZRP7WSK.js";
import "./chunk-NQFT3NIL.js";
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
