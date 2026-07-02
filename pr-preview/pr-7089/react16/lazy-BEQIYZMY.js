import {
  UniverDocsMentionUIPlugin
} from "./chunk-7HY2536Y.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZWI6NX3T.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FPAA2RTB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IR2YQJVT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-S44RJJQ2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-TZTZZZVF.js";
import "./chunk-7YK65KMN.js";
import "./chunk-E5D3NWK4.js";
import "./chunk-LLWLDPCD.js";
import "./chunk-DKCV6UIT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LAB3P5WS.js";
import "./chunk-DDASKM27.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HMG34QTQ.js";
import "./chunk-WODLW4WL.js";
import "./chunk-6PIPBXM2.js";
import "./chunk-R2NUHHOI.js";
import "./chunk-RR6M52SX.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-WMKYTCYP.js";
import "./chunk-4ZVILBEQ.js";
import "./chunk-PD2XMV4N.js";
import "./chunk-AM2UDTII.js";
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
