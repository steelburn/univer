import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SB3BRN2P.js";
import "./chunk-RJUSJQ35.js";
import "./chunk-BZ2CNRCG.js";
import "./chunk-2PTJTRYN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D2NN3LSL.js";
import "./chunk-N3VRBPRQ.js";
import "./chunk-X7UG55BB.js";
import "./chunk-TXJNVTTA.js";
import "./chunk-BVX7VFBB.js";
import "./chunk-IPGQAMWF.js";
import "./chunk-NFP2ERRU.js";
import "./chunk-XXPIJT3B.js";
import "./chunk-P5KDHCJI.js";
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
