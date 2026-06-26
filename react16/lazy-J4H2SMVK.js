import {
  UniverDocsMentionUIPlugin
} from "./chunk-LP2GZNIF.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ROIO7PS5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4VU2UAQG.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JTDPWI7O.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-EP5IBW43.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YAKD57XC.js";
import "./chunk-LMUXTFLM.js";
import "./chunk-2FD3DLXQ.js";
import "./chunk-7JS6HMGE.js";
import "./chunk-TQ7KYJME.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-UDHQTYDE.js";
import "./chunk-FZ3UWRDE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V42QMRDN.js";
import "./chunk-XEDPH47T.js";
import "./chunk-NB7ZYDCP.js";
import "./chunk-ZXFJA52I.js";
import "./chunk-ANAQDJNB.js";
import "./chunk-BTNAS3YE.js";
import "./chunk-DYNPPXJ5.js";
import "./chunk-YFJR3M5H.js";
import "./chunk-2AX73GH7.js";
import "./chunk-7O3JHHB2.js";
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
