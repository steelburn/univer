import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NJMGTJHL.js";
import "./chunk-D2Q2RCQY.js";
import "./chunk-XRKTC3VR.js";
import "./chunk-KFAKKVKR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6JU23VLJ.js";
import "./chunk-QMEMTVMY.js";
import "./chunk-XUSXRDTA.js";
import "./chunk-7HTXW44V.js";
import "./chunk-Y2B2TBBI.js";
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
