import {
  UniverDocsMentionUIPlugin
} from "./chunk-3B72ZKJT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4TXTBB7R.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DQ6RAGLI.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-SULFK5ZP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FQZ46DVA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-A3JV5HVT.js";
import "./chunk-3XWENCEQ.js";
import "./chunk-4R5LLVR5.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-WC3XEGTQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NHAWPOVP.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3RGJMY5E.js";
import "./chunk-7XIUGZCV.js";
import "./chunk-PHM76AHR.js";
import "./chunk-VOWOKVZU.js";
import "./chunk-YAMWJSB5.js";
import "./chunk-72V6NIU2.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
