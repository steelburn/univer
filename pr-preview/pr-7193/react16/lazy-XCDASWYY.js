import {
  UniverDocsMentionUIPlugin
} from "./chunk-TYVLT2XK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-UGN4DUTP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TUVEGPYH.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-T5MKEGVF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FVEBSOLR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EOEOSYOV.js";
import "./chunk-ZVVKS6JO.js";
import "./chunk-WRSK4IIY.js";
import "./chunk-HRUJYZFA.js";
import "./chunk-UWQCDZP4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4GPSW7WW.js";
import "./chunk-VPOPJAKE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WKMXKJ4U.js";
import "./chunk-TMXBBFQG.js";
import "./chunk-DZPFJXQA.js";
import "./chunk-EGY4MQGY.js";
import "./chunk-HVYBSRJX.js";
import "./chunk-7CLHRL5D.js";
import "./chunk-3ONFBMGU.js";
import "./chunk-4YRUDHBP.js";
import "./chunk-VZRP7WSK.js";
import "./chunk-NQFT3NIL.js";
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
