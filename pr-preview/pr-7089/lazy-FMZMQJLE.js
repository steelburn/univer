import {
  UniverDocsMentionUIPlugin
} from "./chunk-L37EIICK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3WQDUNVS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RGWWQLAJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5SUVCIBV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QFLIKRB3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-74HRGHTY.js";
import "./chunk-BEB3Y4R7.js";
import "./chunk-NJJ6T2TH.js";
import "./chunk-CU3K7KBA.js";
import "./chunk-6GAORRQ3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4SAJOLD5.js";
import "./chunk-7GDM7YVM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D3W4XGYC.js";
import "./chunk-N4GYHX32.js";
import "./chunk-ZKXMP5AB.js";
import "./chunk-EO4JTPVV.js";
import "./chunk-NNYXIEMR.js";
import "./chunk-5RNYM7UN.js";
import "./chunk-UYLUETOS.js";
import "./chunk-VVSBXURV.js";
import "./chunk-2FMDUAYC.js";
import "./chunk-UGNHOIG6.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
