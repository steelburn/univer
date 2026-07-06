import {
  UniverDocsMentionUIPlugin
} from "./chunk-V7A5T7WY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5GT4B6BH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-B37NLZO3.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5KNEAR73.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2LBWT6B5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2WY4MIB4.js";
import "./chunk-ZODLRRYT.js";
import "./chunk-XBQUB3V7.js";
import "./chunk-DBSCVVZF.js";
import "./chunk-VNY7SZ2G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RIV26ZAQ.js";
import "./chunk-PG7FNUSK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EAYEQJ4J.js";
import "./chunk-GQEKXTHQ.js";
import "./chunk-O4AGYTA4.js";
import "./chunk-2JOIDZXJ.js";
import "./chunk-U3S5TFOV.js";
import "./chunk-KBDFGRW6.js";
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
