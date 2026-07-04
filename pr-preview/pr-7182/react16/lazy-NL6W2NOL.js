import {
  UniverDocsMentionUIPlugin
} from "./chunk-NZOVMZDE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OVLWB7D2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XR4RPZFS.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3JGGT77J.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-A4FH7IBN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BAJFTYMY.js";
import "./chunk-JBF7FEQX.js";
import "./chunk-KY33W52D.js";
import "./chunk-OGZHCYPY.js";
import "./chunk-2HMN5TPZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-H5IPHVRO.js";
import "./chunk-L3LZ3O5L.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-N37IVJML.js";
import "./chunk-U24YEMF5.js";
import "./chunk-NPYPSDRM.js";
import "./chunk-TLOR3QQH.js";
import "./chunk-5R5XDJDK.js";
import "./chunk-5RHXHS6U.js";
import "./chunk-AVIWFNB4.js";
import "./chunk-3VS2YENM.js";
import "./chunk-WCE4C2PP.js";
import "./chunk-UKOQHXZK.js";
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
