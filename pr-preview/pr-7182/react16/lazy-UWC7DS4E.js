import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XR4RPZFS.js";
import "./chunk-2HMN5TPZ.js";
import "./chunk-H5IPHVRO.js";
import "./chunk-L3LZ3O5L.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-N37IVJML.js";
import "./chunk-U24YEMF5.js";
import "./chunk-TLOR3QQH.js";
import "./chunk-5R5XDJDK.js";
import "./chunk-5RHXHS6U.js";
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
