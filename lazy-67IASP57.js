import {
  UniverDocsMentionUIPlugin
} from "./chunk-O4A6F6BD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SNZUZW3E.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MOWA3K4Z.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WBUGID6D.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZJAQD3YA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4UYV4UQS.js";
import "./chunk-3BDXJ5LY.js";
import "./chunk-CYMVZCSK.js";
import "./chunk-WPLMSDVI.js";
import "./chunk-BD7INVQP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-2T4LHTPF.js";
import "./chunk-KZBHPHNR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RGUDOGVG.js";
import "./chunk-ZPIFMXX3.js";
import "./chunk-VVTBH4WP.js";
import "./chunk-BMTDMI2S.js";
import "./chunk-RV5HGSLX.js";
import "./chunk-M3TRFQLV.js";
import "./chunk-FVCNQDUO.js";
import "./chunk-EDVR2PND.js";
import "./chunk-JT4UYYTA.js";
import "./chunk-H64B2WDJ.js";
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
