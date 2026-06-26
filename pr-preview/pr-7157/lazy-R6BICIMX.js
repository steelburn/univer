import {
  UniverDocsMentionUIPlugin
} from "./chunk-VWD4LJG3.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BG3LCLFD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-P6YCFDYL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DADT5CRF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RONKF4T3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-57EG6ZMY.js";
import "./chunk-LMUXTFLM.js";
import "./chunk-2FD3DLXQ.js";
import "./chunk-7JS6HMGE.js";
import "./chunk-TQ7KYJME.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XQ6JLOU3.js";
import "./chunk-FZ3UWRDE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6NSQXSKK.js";
import "./chunk-ZS7KM35R.js";
import "./chunk-NB7ZYDCP.js";
import "./chunk-TNLKB7MZ.js";
import "./chunk-ZBJIKGFI.js";
import "./chunk-CUCEPQQK.js";
import "./chunk-DYNPPXJ5.js";
import "./chunk-YFJR3M5H.js";
import "./chunk-2AX73GH7.js";
import "./chunk-7O3JHHB2.js";
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
