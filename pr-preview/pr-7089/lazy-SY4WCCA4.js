import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GGBH7XNI.js";
import "./chunk-GFDOKAZY.js";
import "./chunk-GLYVBXWL.js";
import "./chunk-HCWYKH27.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NIVGGNXK.js";
import "./chunk-JKXKREPW.js";
import "./chunk-3S4UFDZZ.js";
import "./chunk-RYDZUMMQ.js";
import "./chunk-D4NC5GSO.js";
import "./chunk-ZKOOUDQJ.js";
import "./chunk-F77LJMQC.js";
import "./chunk-6P4JMQYP.js";
import "./chunk-2OKSGSKY.js";
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
