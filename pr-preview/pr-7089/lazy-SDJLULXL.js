import {
  UniverDocsMentionUIPlugin
} from "./chunk-VI74YFVM.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DYYSFUGI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TLVMFGFR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7CS4QQX5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LKHWMLS3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4BPJN463.js";
import "./chunk-HXKZ2IDP.js";
import "./chunk-T3XDRZIU.js";
import "./chunk-5KGCGXNI.js";
import "./chunk-5ULIT7OO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VVDBWUG3.js";
import "./chunk-XBC5FNZ2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A52JLQXH.js";
import "./chunk-2BCLHJDF.js";
import "./chunk-J5IWGUYY.js";
import "./chunk-5BVBJYD7.js";
import "./chunk-ZT4DTC4C.js";
import "./chunk-KAOBDX34.js";
import "./chunk-VOQNCJT4.js";
import "./chunk-3WUY5WXU.js";
import "./chunk-YIWQ4VME.js";
import "./chunk-QPAXVCAC.js";
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
