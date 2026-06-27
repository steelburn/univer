import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V5ZQE3FL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DYR27BI3.js";
import "./chunk-QUHIKIEB.js";
import "./chunk-EIAWKFP7.js";
import "./chunk-TKJ44BLP.js";
import "./chunk-CDKUTHSD.js";
import "./chunk-6MBQ2LW4.js";
import "./chunk-GMQ4GLVG.js";
import "./chunk-TWPETBMX.js";
import "./chunk-JPAQCREO.js";
import "./chunk-E7MFA523.js";
import "./chunk-XDSNGS3M.js";
import "./chunk-JD4X33BA.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
