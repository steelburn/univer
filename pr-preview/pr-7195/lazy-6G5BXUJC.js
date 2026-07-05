import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JLUUXD3K.js";
import "./chunk-OFIANAVS.js";
import "./chunk-AB2ASX4N.js";
import "./chunk-3NXY3SOX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XMZGDVTQ.js";
import "./chunk-TIEX6CJH.js";
import "./chunk-IZ46N3AS.js";
import "./chunk-RZPW4CGI.js";
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
