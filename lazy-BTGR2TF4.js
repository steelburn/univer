import {
  UniverDocsMentionUIPlugin
} from "./chunk-VCXF7MLD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FR7QKSFT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-EYYVPCVY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZFUHSQKZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-24KRN2XK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OVCGF6ZF.js";
import "./chunk-H6IKFNUB.js";
import "./chunk-WEH6UA5C.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-TG5VI7XE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-62MBQRPS.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5YHPNAJD.js";
import "./chunk-HCVYW3WN.js";
import "./chunk-NPMILPK4.js";
import "./chunk-VT6VSWAG.js";
import "./chunk-5NAFVRJF.js";
import "./chunk-LIG3MUKA.js";
import "./chunk-IGRQIP3D.js";
import "./chunk-MWE37INK.js";
import "./chunk-5WHMUGXX.js";
import "./chunk-TEI2QFPC.js";
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
