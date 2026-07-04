import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YON75KEF.js";
import "./chunk-EGI7AS7O.js";
import "./chunk-GIBAD37O.js";
import "./chunk-COH4TLLN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TP455RKZ.js";
import "./chunk-4HEBP4FB.js";
import "./chunk-FNWQAIAV.js";
import "./chunk-NHEF2VUB.js";
import "./chunk-PXQ54QE4.js";
import "./chunk-2XSA2LC7.js";
import "./chunk-IGOTXBK6.js";
import "./chunk-NTKRGZ6Y.js";
import "./chunk-LCVHUHN7.js";
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
