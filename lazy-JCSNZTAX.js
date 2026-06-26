import {
  UniverDocsMentionUIPlugin
} from "./chunk-WW6Q57JG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-C3J5V4AW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-EDQTHB42.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QACEXGWY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-F66QQQ7W.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6ATIVTJQ.js";
import "./chunk-UTDRKTED.js";
import "./chunk-TDR6CHOZ.js";
import "./chunk-DKQWKSTJ.js";
import "./chunk-KWU2VN5P.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PI7EPSS3.js";
import "./chunk-HOCNG3UD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W5LZZ43L.js";
import "./chunk-E4N3OZS5.js";
import "./chunk-UXRKAF4B.js";
import "./chunk-O7UOHNOS.js";
import "./chunk-HKBJ7D45.js";
import "./chunk-C7KTYNCZ.js";
import "./chunk-GFE77NE5.js";
import "./chunk-ZZ4GQ3KO.js";
import "./chunk-YC3KISDR.js";
import "./chunk-S6MVWVUZ.js";
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
