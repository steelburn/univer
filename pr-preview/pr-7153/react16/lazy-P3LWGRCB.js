import {
  UniverDocsMentionUIPlugin
} from "./chunk-QUZQPOUY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-U7PVMK5H.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DAPMJ6GA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-27MVSQNM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-Z5BM2O2U.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PDLSES7A.js";
import "./chunk-LYUZZESB.js";
import "./chunk-ENNEGZAA.js";
import "./chunk-L552B7LR.js";
import "./chunk-WS42SYZM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DW5GLPHT.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IYBYC6XC.js";
import "./chunk-6JYTN3YG.js";
import "./chunk-T4BC5SWP.js";
import "./chunk-2GSCTQDY.js";
import "./chunk-LNBNUWPI.js";
import "./chunk-LFGCPWJU.js";
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
