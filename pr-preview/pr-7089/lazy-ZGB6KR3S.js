import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-436ZQXJL.js";
import "./chunk-KLCIQCV2.js";
import "./chunk-JON46KA2.js";
import "./chunk-3FAPUKMB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NGNEGYS4.js";
import "./chunk-RSE4XJ65.js";
import "./chunk-KWWXQZKE.js";
import "./chunk-PYZPGY5B.js";
import "./chunk-QNYCEYFA.js";
import "./chunk-7OKPYA37.js";
import "./chunk-IPR36F56.js";
import "./chunk-P3BUXCOC.js";
import "./chunk-B4VGFPLO.js";
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
