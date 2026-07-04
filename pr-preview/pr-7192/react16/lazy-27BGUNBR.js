import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LIZE772N.js";
import "./chunk-OYSCW6KK.js";
import "./chunk-JLSL4GMX.js";
import "./chunk-AFO5V46B.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AQCG22LR.js";
import "./chunk-CS3UAARQ.js";
import "./chunk-QCOUDG7P.js";
import "./chunk-YI2R2YWL.js";
import "./chunk-3HUGWSDP.js";
import "./chunk-6W76PZHA.js";
import "./chunk-3NID2K3K.js";
import "./chunk-EMXII5U6.js";
import "./chunk-6F7TJWHX.js";
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
