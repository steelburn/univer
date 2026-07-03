import {
  UniverDocsMentionUIPlugin
} from "./chunk-BYVB675W.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MV7WQC4Z.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BCZKIEZO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OJK522KV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PZIQXGSB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZW5L2XM3.js";
import "./chunk-H6IKFNUB.js";
import "./chunk-WEH6UA5C.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-TG5VI7XE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TVZD2UPK.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GD7D6O77.js";
import "./chunk-PMOIPOXL.js";
import "./chunk-NPMILPK4.js";
import "./chunk-ESKDIVAU.js";
import "./chunk-3IOKGTT7.js";
import "./chunk-MY64UXZ6.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
