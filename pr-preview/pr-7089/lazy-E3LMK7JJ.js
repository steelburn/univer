import {
  UniverDocsMentionUIPlugin
} from "./chunk-WNVU6JFP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WC4MFXF3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NJMGTJHL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NGHV6CC4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BYF5GDLH.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XCJISPOV.js";
import "./chunk-SHBAEM2T.js";
import "./chunk-B4YULJM7.js";
import "./chunk-DFFLGMFY.js";
import "./chunk-D2Q2RCQY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XRKTC3VR.js";
import "./chunk-KFAKKVKR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6JU23VLJ.js";
import "./chunk-QMEMTVMY.js";
import "./chunk-NMAQHIKV.js";
import "./chunk-XUSXRDTA.js";
import "./chunk-7HTXW44V.js";
import "./chunk-Y2B2TBBI.js";
import "./chunk-C3ZQOYBR.js";
import "./chunk-4QYAFJVV.js";
import "./chunk-ROLOHZXF.js";
import "./chunk-C554UIRR.js";
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
