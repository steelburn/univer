import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WUBFADVA.js";
import "./chunk-ALX7IIV3.js";
import "./chunk-4Q5IA4SM.js";
import "./chunk-HG2M4TBP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3GXCL4DE.js";
import "./chunk-J2KWK7W4.js";
import "./chunk-YX4RPWZV.js";
import "./chunk-5BC7SV5L.js";
import "./chunk-D3LZAZGX.js";
import "./chunk-WNULU2PR.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
