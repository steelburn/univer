import {
  UniverDocsMentionUIPlugin
} from "./chunk-ANGDPSWJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YN24I54L.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SB3BRN2P.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TOHJP3ZX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KAQUJKFC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SA4FBJWQ.js";
import "./chunk-USCJC36H.js";
import "./chunk-LQEA5VQU.js";
import "./chunk-HX3CAAIY.js";
import "./chunk-RJUSJQ35.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BZ2CNRCG.js";
import "./chunk-2PTJTRYN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D2NN3LSL.js";
import "./chunk-N3VRBPRQ.js";
import "./chunk-E773POYQ.js";
import "./chunk-X7UG55BB.js";
import "./chunk-TXJNVTTA.js";
import "./chunk-BVX7VFBB.js";
import "./chunk-IPGQAMWF.js";
import "./chunk-NFP2ERRU.js";
import "./chunk-XXPIJT3B.js";
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
