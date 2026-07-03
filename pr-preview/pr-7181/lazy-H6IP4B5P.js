import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VWX22Z4O.js";
import "./chunk-TG5VI7XE.js";
import "./chunk-7333WJQZ.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R5ROZDVG.js";
import "./chunk-HE5S6ZI6.js";
import "./chunk-QIHEWUMB.js";
import "./chunk-OSRB4DA7.js";
import "./chunk-7FAIONDU.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
