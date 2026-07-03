import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UGFAKDEY.js";
import "./chunk-2HMN5TPZ.js";
import "./chunk-WRGFJEAK.js";
import "./chunk-L3LZ3O5L.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FFYNRHRC.js";
import "./chunk-PQFL3CAG.js";
import "./chunk-5C6CNY2L.js";
import "./chunk-C4DUVGK5.js";
import "./chunk-B6YQ7SMI.js";
import "./chunk-AVIWFNB4.js";
import "./chunk-3VS2YENM.js";
import "./chunk-WCE4C2PP.js";
import "./chunk-UKOQHXZK.js";
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
