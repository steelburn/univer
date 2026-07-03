import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AKB7KR25.js";
import "./chunk-WBXJWUTV.js";
import "./chunk-JTFGS7PS.js";
import "./chunk-3CUZLJHJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ELWUTMBR.js";
import "./chunk-MLMWDYZJ.js";
import "./chunk-7BXLMFUA.js";
import "./chunk-NSKAB4RB.js";
import "./chunk-PUQR5SXY.js";
import "./chunk-3DCU674G.js";
import "./chunk-Z22NX2ZN.js";
import "./chunk-NHJ5OXWA.js";
import "./chunk-UVVCF4V5.js";
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
