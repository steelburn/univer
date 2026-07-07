import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OOEJGI2U.js";
import "./chunk-MH4F6PIU.js";
import "./chunk-V4LAGLIJ.js";
import "./chunk-L765PEWF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A5EHG7DP.js";
import "./chunk-J6TJFUJJ.js";
import "./chunk-EYOA5CW3.js";
import "./chunk-Y44STU53.js";
import "./chunk-5VTXYISK.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
import "./chunk-CBGIOZGI.js";
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
