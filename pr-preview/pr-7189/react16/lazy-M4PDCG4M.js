import {
  UniverDocsMentionUIPlugin
} from "./chunk-HWEWWNDM.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3SX2WKMA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UD3GB3PH.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HC4EQPL7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-O5YMKKM2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3I72Y67E.js";
import "./chunk-H6IKFNUB.js";
import "./chunk-WEH6UA5C.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-C6TETNAB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IEAKB736.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZDUZUE45.js";
import "./chunk-DH5ZIZJN.js";
import "./chunk-NPMILPK4.js";
import "./chunk-M2TXX5HG.js";
import "./chunk-5BU6S7D4.js";
import "./chunk-NHEJO5CP.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
