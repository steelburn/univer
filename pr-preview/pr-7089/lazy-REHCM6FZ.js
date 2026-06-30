import {
  UniverDocsMentionUIPlugin
} from "./chunk-AS4TNILC.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4RDX5VW5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DUW5E2ZO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XUE523RS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OC6XTNZ2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2UBH65ZL.js";
import "./chunk-SHBAEM2T.js";
import "./chunk-B4YULJM7.js";
import "./chunk-DFFLGMFY.js";
import "./chunk-D2Q2RCQY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-OTDGSBI6.js";
import "./chunk-KFAKKVKR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5PRAOZGF.js";
import "./chunk-FCZOVYFF.js";
import "./chunk-NMAQHIKV.js";
import "./chunk-GGLAE6FN.js";
import "./chunk-WB4OG647.js";
import "./chunk-X254Q5T7.js";
import "./chunk-C3ZQOYBR.js";
import "./chunk-4QYAFJVV.js";
import "./chunk-ROLOHZXF.js";
import "./chunk-C554UIRR.js";
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
