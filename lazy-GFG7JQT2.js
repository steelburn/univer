import {
  UniverDocsMentionUIPlugin
} from "./chunk-F7JGTGLR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-67RDBRIR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GFLUZUWY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-E2CBWAC4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-HPNUEXWE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-H4UVSPIK.js";
import "./chunk-QTMUPLBI.js";
import "./chunk-OJ535HBH.js";
import "./chunk-7DRE6BXR.js";
import "./chunk-WBXJWUTV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RRFTDJHZ.js";
import "./chunk-3CUZLJHJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EE3KPUWO.js";
import "./chunk-3KKLHCVI.js";
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
