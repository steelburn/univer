import {
  UniverDocsMentionUIPlugin
} from "./chunk-IJCNJ6ZT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VC3FGYKS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VFXBM4W7.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PRFBDF43.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3BFKFSZE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-7NWWYHLN.js";
import "./chunk-QQH4WLSL.js";
import "./chunk-B3RFGDU3.js";
import "./chunk-6SJSSRNL.js";
import "./chunk-XGUKHRYW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WW4LPWLF.js";
import "./chunk-5I2CJEUN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JJUIGY5K.js";
import "./chunk-XVYLP3GF.js";
import "./chunk-HIJCDAAU.js";
import "./chunk-PXHBEZNC.js";
import "./chunk-UYAWZQ7D.js";
import "./chunk-K7QVM4VQ.js";
import "./chunk-UUXCCQDN.js";
import "./chunk-YGL77P23.js";
import "./chunk-UZB6LHUM.js";
import "./chunk-QJESARYQ.js";
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
