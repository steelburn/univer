import {
  UniverDocsMentionUIPlugin
} from "./chunk-NZQBIFZA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-GOPFCQML.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2HK4XSCP.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JDTZAH2L.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3KHGRII3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HEAJQLZK.js";
import "./chunk-S45BA7W6.js";
import "./chunk-RX7XJK7C.js";
import "./chunk-4RC7FQ3E.js";
import "./chunk-ZUNB62OC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RB2THKXR.js";
import "./chunk-3NIACOMI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CLRE3VCK.js";
import "./chunk-3F7GG72S.js";
import "./chunk-FRFT7YG4.js";
import "./chunk-SS6EWUSO.js";
import "./chunk-MJIKSOFJ.js";
import "./chunk-6J27KZCS.js";
import "./chunk-CKYJLVLX.js";
import "./chunk-A3IQHLDC.js";
import "./chunk-FFQE2NPY.js";
import "./chunk-JHXES2N3.js";
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
