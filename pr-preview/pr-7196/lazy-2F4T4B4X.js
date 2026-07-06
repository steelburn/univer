import {
  UniverDocsMentionUIPlugin
} from "./chunk-6PUZOEYJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5PJV4TUU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-574RQA2F.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HS5QP7KI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-EG4MVD5R.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-334JAARC.js";
import "./chunk-3XWENCEQ.js";
import "./chunk-4R5LLVR5.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-WC3XEGTQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CF7JIU4I.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-M633MO4E.js";
import "./chunk-Y55HX77S.js";
import "./chunk-PHM76AHR.js";
import "./chunk-4UTAS6TV.js";
import "./chunk-MK632X77.js";
import "./chunk-VX6S3X62.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
