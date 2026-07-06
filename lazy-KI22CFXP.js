import {
  UniverDocsMentionUIPlugin
} from "./chunk-OXX6IEYS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-KL7JUDDJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F6OKC7MD.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OUOBZWUS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3NCRR3TF.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DCBDY7TD.js";
import "./chunk-3XWENCEQ.js";
import "./chunk-4R5LLVR5.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-WC3XEGTQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-J4XTTT5I.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XQ5UQIBN.js";
import "./chunk-TZZKTRDG.js";
import "./chunk-PHM76AHR.js";
import "./chunk-YG6OPIXN.js";
import "./chunk-53CJNR2L.js";
import "./chunk-72V6NIU2.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
