import {
  UniverDocsMentionUIPlugin
} from "./chunk-WU45LXVU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SWEYUONJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UL6UEUG7.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WI23KKFU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-F237ELO2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PEVXETMX.js";
import "./chunk-H6IKFNUB.js";
import "./chunk-W75Y7QEW.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-TG5VI7XE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-76HRO4WL.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2PINCHST.js";
import "./chunk-MTZKB6MX.js";
import "./chunk-NPMILPK4.js";
import "./chunk-XNWWFZB2.js";
import "./chunk-VQAEIINW.js";
import "./chunk-LIG3MUKA.js";
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
