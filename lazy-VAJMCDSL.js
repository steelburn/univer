import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZYSQH7ON.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XPJRZZPH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IYZRLLVJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MSJYTC6L.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QITBPQXN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5335NU4L.js";
import "./chunk-YESG7SZL.js";
import "./chunk-LXHTE2L3.js";
import "./chunk-VFBTU3R4.js";
import "./chunk-GOZC7HS6.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-J4PAFPML.js";
import "./chunk-PJC5Q3Y6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7QG7N2FI.js";
import "./chunk-K7GTW7JU.js";
import "./chunk-H6OXEYL5.js";
import "./chunk-PDVUKZV5.js";
import "./chunk-QK3SKOCN.js";
import "./chunk-HRNSATQF.js";
import "./chunk-GCAVSOIP.js";
import "./chunk-AARVXHF2.js";
import "./chunk-ZGHCBBJ6.js";
import "./chunk-AQVHF73V.js";
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
