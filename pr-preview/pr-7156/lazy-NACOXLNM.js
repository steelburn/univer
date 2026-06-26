import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4VU2UAQG.js";
import "./chunk-TQ7KYJME.js";
import "./chunk-UDHQTYDE.js";
import "./chunk-FZ3UWRDE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V42QMRDN.js";
import "./chunk-XEDPH47T.js";
import "./chunk-ZXFJA52I.js";
import "./chunk-ANAQDJNB.js";
import "./chunk-BTNAS3YE.js";
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
