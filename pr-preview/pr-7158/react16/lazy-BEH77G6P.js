import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NJQNPKRD.js";
import "./chunk-XTBQNKU3.js";
import "./chunk-EISAZCUD.js";
import "./chunk-XKV6PVIN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YNXSA36Q.js";
import "./chunk-UGYUBKCY.js";
import "./chunk-STCQE6Z4.js";
import "./chunk-EITKUHJA.js";
import "./chunk-QFN5BPXT.js";
import "./chunk-Z7BTC3XM.js";
import "./chunk-4YXP2MPR.js";
import "./chunk-Y6A4QOBR.js";
import "./chunk-FBCWWWX3.js";
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
