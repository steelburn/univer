import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZYSQH7ON.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-GSEIQLCP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V7IAZYIG.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZU2PXV7Q.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-EYES5V7T.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5335NU4L.js";
import "./chunk-YESG7SZL.js";
import "./chunk-LXHTE2L3.js";
import "./chunk-VFBTU3R4.js";
import "./chunk-GOZC7HS6.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LBL4PQJH.js";
import "./chunk-PJC5Q3Y6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HJ27K5PV.js";
import "./chunk-NN5RA2IS.js";
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
