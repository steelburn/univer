import {
  UniverDocsMentionUIPlugin
} from "./chunk-HH5PTPWN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TNR2FAUH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SLZ547JA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-S2QRET7P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-N5FSWZL5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KDHNYESS.js";
import "./chunk-WD4S43QL.js";
import "./chunk-PHEUIUNT.js";
import "./chunk-SBAKQZSC.js";
import "./chunk-OFIANAVS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-F7S5364W.js";
import "./chunk-3NXY3SOX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ODKGBHC3.js";
import "./chunk-7YVWBIMO.js";
import "./chunk-5IECQFZK.js";
import "./chunk-F735FFDE.js";
import "./chunk-IOJMGGMS.js";
import "./chunk-MEUEE4XB.js";
import "./chunk-XIWGWHOE.js";
import "./chunk-5MHJTTDS.js";
import "./chunk-X7DAPWNR.js";
import "./chunk-V6KA3GW7.js";
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
