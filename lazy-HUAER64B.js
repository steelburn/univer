import {
  UniverDocsMentionUIPlugin
} from "./chunk-HVJKZ2W7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OHC4UWBV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HFT36OYU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CDW6KGV2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-SENHQ4L7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BNRDLB65.js";
import "./chunk-ZODLRRYT.js";
import "./chunk-XBQUB3V7.js";
import "./chunk-DBSCVVZF.js";
import "./chunk-U3VXXD5Q.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MDDSISAV.js";
import "./chunk-PG7FNUSK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V5V2TBM2.js";
import "./chunk-S47X7LKL.js";
import "./chunk-O4AGYTA4.js";
import "./chunk-VO3VU7DW.js";
import "./chunk-WE43C7WD.js";
import "./chunk-7UIAQ5RJ.js";
import "./chunk-3XVATOG6.js";
import "./chunk-7MAGD6AG.js";
import "./chunk-65ZVRLT5.js";
import "./chunk-LM6KX6ET.js";
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
