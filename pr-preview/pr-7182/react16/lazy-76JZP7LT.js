import {
  UniverDocsMentionUIPlugin
} from "./chunk-C3HGE5GK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7JHGEEYO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-M7FILM6O.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5P47D3D3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5AFZBKXZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YIVJ3V75.js";
import "./chunk-6ZUZZDXB.js";
import "./chunk-HV3ADHTT.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-2XTMD4RM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CQL6XDIY.js";
import "./chunk-UIRJ6XGE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OZ3W57OC.js";
import "./chunk-DKV56ZS2.js";
import "./chunk-7ICI7FM3.js";
import "./chunk-GVBMSGGW.js";
import "./chunk-66QBEWCC.js";
import "./chunk-UZUB5VJ7.js";
import "./chunk-ZOVDHVYH.js";
import "./chunk-L25CYCI3.js";
import "./chunk-4TFOO2AG.js";
import "./chunk-7C7XL6G2.js";
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
