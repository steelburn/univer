import {
  UniverDocsMentionUIPlugin
} from "./chunk-SNHLUVPH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Y77XID7G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QJDEOLKN.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ULMC4OMT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-CZLRFGYU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EMXR2HSO.js";
import "./chunk-3XWENCEQ.js";
import "./chunk-4R5LLVR5.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-EZYIXBES.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HUMEXQTA.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-C7M7P6HE.js";
import "./chunk-OUXUBCXX.js";
import "./chunk-PHM76AHR.js";
import "./chunk-XY3HBZFM.js";
import "./chunk-X3B5WOQX.js";
import "./chunk-DLEWTMBN.js";
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
