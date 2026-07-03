import {
  UniverDocsMentionUIPlugin
} from "./chunk-6NBIXDXJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-USIXV642.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-U56TSFSU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DH2IR5X4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YL42KUAR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5G3WZRIY.js";
import "./chunk-6ZUZZDXB.js";
import "./chunk-HV3ADHTT.js";
import "./chunk-JHKWJHHH.js";
import "./chunk-2XTMD4RM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FHZT2XH3.js";
import "./chunk-UIRJ6XGE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LB6D577B.js";
import "./chunk-QJQXFRSO.js";
import "./chunk-7ICI7FM3.js";
import "./chunk-CMICBBPE.js";
import "./chunk-H7VUOD7H.js";
import "./chunk-MJGQ6AU2.js";
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
