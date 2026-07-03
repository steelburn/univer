import {
  UniverDocsMentionUIPlugin
} from "./chunk-IG536CQJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XSTHQGPJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UGFAKDEY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-EJQBSCPY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WTMUP264.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4ZMC7QHQ.js";
import "./chunk-JBF7FEQX.js";
import "./chunk-KY33W52D.js";
import "./chunk-OGZHCYPY.js";
import "./chunk-2HMN5TPZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WRGFJEAK.js";
import "./chunk-L3LZ3O5L.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FFYNRHRC.js";
import "./chunk-PQFL3CAG.js";
import "./chunk-NPYPSDRM.js";
import "./chunk-5C6CNY2L.js";
import "./chunk-C4DUVGK5.js";
import "./chunk-B6YQ7SMI.js";
import "./chunk-AVIWFNB4.js";
import "./chunk-3VS2YENM.js";
import "./chunk-WCE4C2PP.js";
import "./chunk-UKOQHXZK.js";
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
