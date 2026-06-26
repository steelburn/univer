import {
  UniverDocsMentionUIPlugin
} from "./chunk-IA6AX2E6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2S5U37Y6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NJQNPKRD.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TA3YVGEM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-EJGXZY7A.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VS5OMID2.js";
import "./chunk-HZ7XYXYM.js";
import "./chunk-GAAEMWEP.js";
import "./chunk-WXPPSNAL.js";
import "./chunk-XTBQNKU3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EISAZCUD.js";
import "./chunk-XKV6PVIN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2BJAGHVD.js";
import "./chunk-UGYUBKCY.js";
import "./chunk-2QNOHHER.js";
import "./chunk-RXD22XQH.js";
import "./chunk-EITKUHJA.js";
import "./chunk-QFN5BPXT.js";
import "./chunk-Z7BTC3XM.js";
import "./chunk-4YXP2MPR.js";
import "./chunk-Y6A4QOBR.js";
import "./chunk-FBCWWWX3.js";
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
