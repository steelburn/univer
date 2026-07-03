import {
  UniverDocsMentionUIPlugin
} from "./chunk-3XEKOOFX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HDEXZHNN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KAXGBPOS.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PRJ3D3ER.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IMMZ4JEG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VAAF3QAK.js";
import "./chunk-6ZUZZDXB.js";
import "./chunk-HV3ADHTT.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-2XTMD4RM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WRQDK4OJ.js";
import "./chunk-UIRJ6XGE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KR54AK6M.js";
import "./chunk-KH2OYXAW.js";
import "./chunk-7ICI7FM3.js";
import "./chunk-3CRDY675.js";
import "./chunk-6WWKMOXK.js";
import "./chunk-H3IFLAP5.js";
import "./chunk-ZOVDHVYH.js";
import "./chunk-L25CYCI3.js";
import "./chunk-4TFOO2AG.js";
import "./chunk-7C7XL6G2.js";
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
