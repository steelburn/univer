import {
  UniverDocsMentionUIPlugin
} from "./chunk-6Y7N6VVX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VVJCM5TF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KPJWLQAD.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QJK2OF3F.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BGBUXTAD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VCTHXEZC.js";
import "./chunk-LYUZZESB.js";
import "./chunk-ENNEGZAA.js";
import "./chunk-L552B7LR.js";
import "./chunk-NMTD3QLI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4WP226ZZ.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UH7434UG.js";
import "./chunk-RLE4C275.js";
import "./chunk-T4BC5SWP.js";
import "./chunk-XRC27V2R.js";
import "./chunk-KQ47BPYS.js";
import "./chunk-52K35IRO.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
