import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-P6YCFDYL.js";
import "./chunk-TQ7KYJME.js";
import "./chunk-XQ6JLOU3.js";
import "./chunk-FZ3UWRDE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6NSQXSKK.js";
import "./chunk-ZS7KM35R.js";
import "./chunk-TNLKB7MZ.js";
import "./chunk-ZBJIKGFI.js";
import "./chunk-CUCEPQQK.js";
import "./chunk-DYNPPXJ5.js";
import "./chunk-YFJR3M5H.js";
import "./chunk-2AX73GH7.js";
import "./chunk-7O3JHHB2.js";
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
