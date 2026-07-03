import {
  UniverDocsMentionUIPlugin
} from "./chunk-QDB5P4IB.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HBCQPCGV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LEIGWW57.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RXLCZDAH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LFVTMBPS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-QISYDXBU.js";
import "./chunk-6ZUZZDXB.js";
import "./chunk-HV3ADHTT.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-2XTMD4RM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HAEFHR22.js";
import "./chunk-UIRJ6XGE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LI7TX254.js";
import "./chunk-QGMG3X2V.js";
import "./chunk-7ICI7FM3.js";
import "./chunk-QJMYEOS4.js";
import "./chunk-6SFPH5XF.js";
import "./chunk-6453U27P.js";
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
