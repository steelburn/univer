import {
  UniverDocsMentionUIPlugin
} from "./chunk-FOMZKQEO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-CM6XZCV5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4TUD55BG.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-C62BY63B.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7BQ4QIL6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XRUV5PRA.js";
import "./chunk-H6IKFNUB.js";
import "./chunk-WEH6UA5C.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-TG5VI7XE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LGEO4VJE.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MPWABH4Y.js";
import "./chunk-TKUEXYWD.js";
import "./chunk-NPMILPK4.js";
import "./chunk-4XCOAXSD.js";
import "./chunk-3EWICPLI.js";
import "./chunk-6PSEXSBX.js";
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
