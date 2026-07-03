import {
  UniverDocsMentionUIPlugin
} from "./chunk-2K7EJJR2.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Q3CTXBEQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Z5AJHK7I.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VMTMZFMA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-AVNINUDV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CACPSKCK.js";
import "./chunk-RFRCCIVL.js";
import "./chunk-2FJ5LE46.js";
import "./chunk-RJ5ZMPQ6.js";
import "./chunk-N5MIE4IT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LYL777Z2.js";
import "./chunk-3BBNCSN5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UTQ3QUPW.js";
import "./chunk-IWAV5DLX.js";
import "./chunk-E773POYQ.js";
import "./chunk-ND6OWVQZ.js";
import "./chunk-JAWWWCPE.js";
import "./chunk-PWDVVLTD.js";
import "./chunk-HITDOKBC.js";
import "./chunk-ZJJKBI4V.js";
import "./chunk-CK6DU2KF.js";
import "./chunk-P5KDHCJI.js";
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
