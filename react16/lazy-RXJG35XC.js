import {
  UniverDocsMentionUIPlugin
} from "./chunk-PHANV624.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JEMKGORH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6U2GWWI5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DDQVV6M5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5YK7GBA6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-RGJYDBOB.js";
import "./chunk-LYUZZESB.js";
import "./chunk-ENNEGZAA.js";
import "./chunk-L552B7LR.js";
import "./chunk-S7IYDQRZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-M2HIO4NK.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OGZUADGA.js";
import "./chunk-PNBDI5JL.js";
import "./chunk-T4BC5SWP.js";
import "./chunk-Y2EKGZ26.js";
import "./chunk-NSZNDFWI.js";
import "./chunk-AGKL5WLT.js";
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
