import {
  UniverDocsMentionUIPlugin
} from "./chunk-NZQBIFZA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5MRFPYGN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PUZYYHC2.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-4JA2CW4P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RQCGW3OB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HEAJQLZK.js";
import "./chunk-S45BA7W6.js";
import "./chunk-RX7XJK7C.js";
import "./chunk-4RC7FQ3E.js";
import "./chunk-ZUNB62OC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-P7PAORB2.js";
import "./chunk-3NIACOMI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VEGYA2J2.js";
import "./chunk-ZGGDB4JA.js";
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
