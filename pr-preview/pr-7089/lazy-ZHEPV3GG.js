import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TF6XIFGF.js";
import "./chunk-DWXWTDAX.js";
import "./chunk-6WTSA2HN.js";
import "./chunk-IUBPC6M3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DHDDXST2.js";
import "./chunk-F46TSK5L.js";
import "./chunk-QJ2KMZRK.js";
import "./chunk-S4C336VJ.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-QBYSMQUM.js";
import "./chunk-3JTM5TRL.js";
import "./chunk-6ZMAA6SO.js";
import "./chunk-AM2UDTII.js";
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
