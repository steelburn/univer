import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SLZ547JA.js";
import "./chunk-OFIANAVS.js";
import "./chunk-F7S5364W.js";
import "./chunk-3NXY3SOX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ODKGBHC3.js";
import "./chunk-7YVWBIMO.js";
import "./chunk-F735FFDE.js";
import "./chunk-IOJMGGMS.js";
import "./chunk-MEUEE4XB.js";
import "./chunk-XIWGWHOE.js";
import "./chunk-5MHJTTDS.js";
import "./chunk-X7DAPWNR.js";
import "./chunk-V6KA3GW7.js";
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
