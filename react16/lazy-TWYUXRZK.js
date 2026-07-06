import {
  UniverDocsMentionUIPlugin
} from "./chunk-UK4TQP4D.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-RO3KJ5WE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6FTC6ENN.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QGHCZFLH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-HHXCTI4W.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BERZTHQ7.js";
import "./chunk-ZODLRRYT.js";
import "./chunk-XBQUB3V7.js";
import "./chunk-DBSCVVZF.js";
import "./chunk-VNY7SZ2G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IB6Y2QQ6.js";
import "./chunk-PG7FNUSK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TYGMEEC6.js";
import "./chunk-RJHUXOPM.js";
import "./chunk-O4AGYTA4.js";
import "./chunk-OQX723RW.js";
import "./chunk-5CJN4YVY.js";
import "./chunk-IDMEHA7N.js";
import "./chunk-3XVATOG6.js";
import "./chunk-7MAGD6AG.js";
import "./chunk-65ZVRLT5.js";
import "./chunk-LM6KX6ET.js";
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
