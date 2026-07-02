import {
  UniverDocsMentionUIPlugin
} from "./chunk-2MW6EUU2.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-G6GSOQUU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TF6XIFGF.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IZJKZ42O.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LMKSFCPX.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WD4AFTTE.js";
import "./chunk-POS3EV2I.js";
import "./chunk-CKA5M3FJ.js";
import "./chunk-QW266UJ5.js";
import "./chunk-DWXWTDAX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6WTSA2HN.js";
import "./chunk-IUBPC6M3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DHDDXST2.js";
import "./chunk-F46TSK5L.js";
import "./chunk-6PIPBXM2.js";
import "./chunk-QJ2KMZRK.js";
import "./chunk-S4C336VJ.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-QBYSMQUM.js";
import "./chunk-3JTM5TRL.js";
import "./chunk-6ZMAA6SO.js";
import "./chunk-AM2UDTII.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
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
