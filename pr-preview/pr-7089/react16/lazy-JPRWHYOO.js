import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZFHH4XAA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-C4RF6XSR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-436ZQXJL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FRL6RKWU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZIZUADQT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6VTYCSRK.js";
import "./chunk-UPMFLJAE.js";
import "./chunk-X6XOYRVX.js";
import "./chunk-PUQSMTNK.js";
import "./chunk-KLCIQCV2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-JON46KA2.js";
import "./chunk-3FAPUKMB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NGNEGYS4.js";
import "./chunk-RSE4XJ65.js";
import "./chunk-F3GIICXC.js";
import "./chunk-KWWXQZKE.js";
import "./chunk-PYZPGY5B.js";
import "./chunk-QNYCEYFA.js";
import "./chunk-7OKPYA37.js";
import "./chunk-IPR36F56.js";
import "./chunk-P3BUXCOC.js";
import "./chunk-B4VGFPLO.js";
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
