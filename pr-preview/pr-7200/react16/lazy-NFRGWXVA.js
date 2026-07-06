import {
  UniverDocsMentionUIPlugin
} from "./chunk-RSJKKIP7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NPVOZTA2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PULDV6RU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DIWFYNHB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-UD64PPVS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CR3AQHFQ.js";
import "./chunk-3XWENCEQ.js";
import "./chunk-4R5LLVR5.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-EZYIXBES.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VE2R7RZE.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ANZUFEKX.js";
import "./chunk-JWG5JT67.js";
import "./chunk-PHM76AHR.js";
import "./chunk-IG4LUXRO.js";
import "./chunk-FPIHPBUB.js";
import "./chunk-CUADIMN7.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
