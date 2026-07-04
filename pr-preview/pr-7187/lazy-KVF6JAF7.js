import {
  UniverDocsMentionUIPlugin
} from "./chunk-F7JGTGLR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HTNFVHJG.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KJ5QJNMU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XKVVNAVZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3J6GXPGU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-H4UVSPIK.js";
import "./chunk-QTMUPLBI.js";
import "./chunk-OJ535HBH.js";
import "./chunk-7DRE6BXR.js";
import "./chunk-WBXJWUTV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZI65MXM3.js";
import "./chunk-3CUZLJHJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WVPI3FH5.js";
import "./chunk-KEURRPB4.js";
import "./chunk-BMBXRLKY.js";
import "./chunk-A6OGKKA2.js";
import "./chunk-FEXAVOZ3.js";
import "./chunk-LKR2FF62.js";
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
