import {
  UniverDocsMentionUIPlugin
} from "./chunk-YF3AHOR5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-A4MRCDFN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AHR5WR4W.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-V4S2NA7X.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LVHBDO4O.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SZABEXV6.js";
import "./chunk-QSLAIMUQ.js";
import "./chunk-2L3QJOUR.js";
import "./chunk-OJROURM7.js";
import "./chunk-VOSZBVPG.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-U55D2QLV.js";
import "./chunk-2YSRLFYR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6TQNZ5CE.js";
import "./chunk-LKDUJWDQ.js";
import "./chunk-6PEYLUFM.js";
import "./chunk-6BRE7BU4.js";
import "./chunk-WZAAH4KX.js";
import "./chunk-WATNN632.js";
import "./chunk-G54VOOXJ.js";
import "./chunk-MAKLEPR2.js";
import "./chunk-LOT2R2OM.js";
import "./chunk-K4NPP4YC.js";
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
