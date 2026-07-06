import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PULDV6RU.js";
import "./chunk-EZYIXBES.js";
import "./chunk-VE2R7RZE.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ANZUFEKX.js";
import "./chunk-JWG5JT67.js";
import "./chunk-IG4LUXRO.js";
import "./chunk-FPIHPBUB.js";
import "./chunk-CUADIMN7.js";
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
