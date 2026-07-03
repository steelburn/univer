import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-M7FILM6O.js";
import "./chunk-2XTMD4RM.js";
import "./chunk-CQL6XDIY.js";
import "./chunk-UIRJ6XGE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OZ3W57OC.js";
import "./chunk-DKV56ZS2.js";
import "./chunk-GVBMSGGW.js";
import "./chunk-66QBEWCC.js";
import "./chunk-UZUB5VJ7.js";
import "./chunk-ZOVDHVYH.js";
import "./chunk-L25CYCI3.js";
import "./chunk-4TFOO2AG.js";
import "./chunk-7C7XL6G2.js";
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
