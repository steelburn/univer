import {
  UniverDocsMentionUIPlugin
} from "./chunk-IU5HCFAO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JTXYG4P6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HIWXVUPM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YKITTWEJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VOWH46YM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3B4FBGZJ.js";
import "./chunk-XZLS3BMB.js";
import "./chunk-4ZJMVMS7.js";
import "./chunk-GXYMTZNO.js";
import "./chunk-R5B2DO5Y.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NCYFLCR7.js";
import "./chunk-GW6PM74R.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2EPIF5W3.js";
import "./chunk-C6QJLPQN.js";
import "./chunk-DGIFAPUD.js";
import "./chunk-NCUBJCRA.js";
import "./chunk-5TB2ASKP.js";
import "./chunk-JZJILZ4M.js";
import "./chunk-H5SKM2Z2.js";
import "./chunk-57OP3PH6.js";
import "./chunk-UC2YZEOY.js";
import "./chunk-VXRJXEHF.js";
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
