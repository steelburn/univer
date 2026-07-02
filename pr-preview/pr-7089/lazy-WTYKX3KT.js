import {
  UniverDocsMentionUIPlugin
} from "./chunk-7ZWQOPTK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-URC2DSSK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZB2HHRV4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-V5KZ4N2K.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-B3JMPQOR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3K47WPRN.js";
import "./chunk-LGMNBJEF.js";
import "./chunk-LO7QJPFG.js";
import "./chunk-WYJJA4K7.js";
import "./chunk-DMK2CYLZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-OH6SBI3P.js";
import "./chunk-E3T2GBVQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZBCIYAJ4.js";
import "./chunk-CQH5VARC.js";
import "./chunk-6PIPBXM2.js";
import "./chunk-EYNWJNDH.js";
import "./chunk-5DMPCEVV.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-ROUCSG5T.js";
import "./chunk-LS2SSBVE.js";
import "./chunk-M6JMRJSB.js";
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
