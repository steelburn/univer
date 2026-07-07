import {
  UniverDocsMentionUIPlugin
} from "./chunk-IXSAWI5E.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7YAP5O2Q.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-W6HGLY2W.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IE2UDGWJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-46TQE63T.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-TMAMEZIG.js";
import "./chunk-HXKZ2IDP.js";
import "./chunk-T3XDRZIU.js";
import "./chunk-5KGCGXNI.js";
import "./chunk-5ULIT7OO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-P3LVN2VS.js";
import "./chunk-XBC5FNZ2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5UVQ6OII.js";
import "./chunk-A4MPPH5A.js";
import "./chunk-J5IWGUYY.js";
import "./chunk-F4HTKBLM.js";
import "./chunk-UEVG3UZ4.js";
import "./chunk-KAOBDX34.js";
import "./chunk-VOQNCJT4.js";
import "./chunk-3WUY5WXU.js";
import "./chunk-YIWQ4VME.js";
import "./chunk-QPAXVCAC.js";
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
