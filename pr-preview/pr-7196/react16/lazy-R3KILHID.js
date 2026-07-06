import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-574RQA2F.js";
import "./chunk-WC3XEGTQ.js";
import "./chunk-CF7JIU4I.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-M633MO4E.js";
import "./chunk-Y55HX77S.js";
import "./chunk-4UTAS6TV.js";
import "./chunk-MK632X77.js";
import "./chunk-VX6S3X62.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
