import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DGMUDXL3.js";
import "./chunk-JFCZKNRZ.js";
import "./chunk-WJNYMSGH.js";
import "./chunk-JMVK2T7D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JPVPGKKO.js";
import "./chunk-D3FNGKGK.js";
import "./chunk-RFOTKZBQ.js";
import "./chunk-G4ASLNLH.js";
import "./chunk-NHSJ25AF.js";
import "./chunk-P7OEMKO4.js";
import "./chunk-HFTONCIN.js";
import "./chunk-XANA7DTY.js";
import "./chunk-IOKMYXS7.js";
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
