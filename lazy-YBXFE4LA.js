import {
  UniverDocsMentionUIPlugin
} from "./chunk-CRXL5VOG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PZXRZ3HV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F56BQP77.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NX2G6F2I.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-NSCWDZXB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZBCCT65O.js";
import "./chunk-MTGDBNJZ.js";
import "./chunk-ZU4K3R4L.js";
import "./chunk-ZW23EQ2H.js";
import "./chunk-7CHCFVF4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TORCEFV5.js";
import "./chunk-XYJ6XNVQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EJT77ZBG.js";
import "./chunk-2SFFFFBJ.js";
import "./chunk-JM4QEXQY.js";
import "./chunk-XT7ZGLUQ.js";
import "./chunk-YKE4JHR7.js";
import "./chunk-GPI5PFDL.js";
import "./chunk-IOTQISKE.js";
import "./chunk-7BFDWMZU.js";
import "./chunk-FTAHREJU.js";
import "./chunk-3BIMVDWB.js";
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
