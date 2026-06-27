import {
  UniverDocsMentionUIPlugin
} from "./chunk-3WDHT6VK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7ITWQ46F.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZTDXW47E.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HPAPNMVA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VI3FABBU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-LVCWA7T3.js";
import "./chunk-D64IY77R.js";
import "./chunk-J6GGGZX7.js";
import "./chunk-5VMY54A6.js";
import "./chunk-UHU2FD36.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-37INZUHB.js";
import "./chunk-2W2YVYGR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OP2S3SPG.js";
import "./chunk-IO37G2BN.js";
import "./chunk-JM4QEXQY.js";
import "./chunk-HGUGJM6X.js";
import "./chunk-OK3SPPRM.js";
import "./chunk-GPI5PFDL.js";
import "./chunk-V6ZAAAD2.js";
import "./chunk-K63MPEPW.js";
import "./chunk-W7DFTLNN.js";
import "./chunk-3BIMVDWB.js";
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
