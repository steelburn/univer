import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6HRM34K4.js";
import "./chunk-VOSZBVPG.js";
import "./chunk-DHFMXJ63.js";
import "./chunk-2YSRLFYR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FCJ3BJNP.js";
import "./chunk-LLCIHVKC.js";
import "./chunk-6BRE7BU4.js";
import "./chunk-WZAAH4KX.js";
import "./chunk-WATNN632.js";
import "./chunk-G54VOOXJ.js";
import "./chunk-MAKLEPR2.js";
import "./chunk-LOT2R2OM.js";
import "./chunk-K4NPP4YC.js";
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
