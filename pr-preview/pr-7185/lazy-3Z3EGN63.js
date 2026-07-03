import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZNF5FAWR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-D7FOK2Y5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AKB7KR25.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QNM2O2KT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-L4FY7DGC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-QZQTT2LC.js";
import "./chunk-QTMUPLBI.js";
import "./chunk-OJ535HBH.js";
import "./chunk-7DRE6BXR.js";
import "./chunk-WBXJWUTV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-JTFGS7PS.js";
import "./chunk-3CUZLJHJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ELWUTMBR.js";
import "./chunk-MLMWDYZJ.js";
import "./chunk-BMBXRLKY.js";
import "./chunk-7BXLMFUA.js";
import "./chunk-NSKAB4RB.js";
import "./chunk-PUQR5SXY.js";
import "./chunk-3DCU674G.js";
import "./chunk-Z22NX2ZN.js";
import "./chunk-NHJ5OXWA.js";
import "./chunk-UVVCF4V5.js";
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
