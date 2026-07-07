import {
  UniverDocsMentionUIPlugin
} from "./chunk-BNZVEVXO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-C35BLP2R.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KIGO7PUU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3UMYUNKH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VUFYWTPT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VQ6QKGXP.js";
import "./chunk-HXKZ2IDP.js";
import "./chunk-T3XDRZIU.js";
import "./chunk-5KGCGXNI.js";
import "./chunk-5ULIT7OO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CZY73HJO.js";
import "./chunk-XBC5FNZ2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IQENMDCM.js";
import "./chunk-JDHBA3JI.js";
import "./chunk-J5IWGUYY.js";
import "./chunk-WN43UG3C.js";
import "./chunk-PCKQZKEB.js";
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
