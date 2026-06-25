import {
  UniverDocsMentionUIPlugin
} from "./chunk-3MDWU2IA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-RMJSCYCF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BBPOOW6N.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OXXGXC2E.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4EVLF3DC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VODMCTEC.js";
import "./chunk-LYUZZESB.js";
import "./chunk-ENNEGZAA.js";
import "./chunk-L552B7LR.js";
import "./chunk-S7IYDQRZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6VYPUTXK.js";
import "./chunk-RCK736ZR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VKTC6UB5.js";
import "./chunk-M6GW23CP.js";
import "./chunk-T4BC5SWP.js";
import "./chunk-EK3P3N73.js";
import "./chunk-LONSY6T7.js";
import "./chunk-HPSPOCG5.js";
import "./chunk-QL5ENDFG.js";
import "./chunk-XVN2R7WE.js";
import "./chunk-OWP74SHF.js";
import "./chunk-SRJPNYWR.js";
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
