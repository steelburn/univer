import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZQC3P3RZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-47ODXBIK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QEWHGKOD.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XEP46GGB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WMVUWSLZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SCU4I2SH.js";
import "./chunk-3XWENCEQ.js";
import "./chunk-4R5LLVR5.js";
import "./chunk-YYFJ72Q5.js";
import "./chunk-WC3XEGTQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NFXH7ZDZ.js";
import "./chunk-2TZU3TJQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PRI47MVV.js";
import "./chunk-CPZG2275.js";
import "./chunk-PHM76AHR.js";
import "./chunk-N3CSWUWX.js";
import "./chunk-HQ5A2ZNX.js";
import "./chunk-U6AYUUE2.js";
import "./chunk-3TTOIEIC.js";
import "./chunk-6RIEYIB7.js";
import "./chunk-2NSFOEHV.js";
import "./chunk-NKLVFE4S.js";
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
