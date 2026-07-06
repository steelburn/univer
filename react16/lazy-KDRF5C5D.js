import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F6OKC7MD.js";
import "./chunk-WC3XEGTQ.js";
import "./chunk-J4XTTT5I.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XQ5UQIBN.js";
import "./chunk-TZZKTRDG.js";
import "./chunk-YG6OPIXN.js";
import "./chunk-53CJNR2L.js";
import "./chunk-72V6NIU2.js";
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
