import {
  UniverDocsMentionUIPlugin
} from "./chunk-P3S2MASD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VD2VRB2T.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-64ZZ5AG6.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5SJMZ4YR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GVY53PKN.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NW7U2CY6.js";
import "./chunk-RFRCCIVL.js";
import "./chunk-2FJ5LE46.js";
import "./chunk-RJ5ZMPQ6.js";
import "./chunk-N5MIE4IT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KELN34AS.js";
import "./chunk-3BBNCSN5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EXKNWFSF.js";
import "./chunk-QSOVMFUQ.js";
import "./chunk-E773POYQ.js";
import "./chunk-RDA67HDS.js";
import "./chunk-CRWIVMZJ.js";
import "./chunk-BVX7VFBB.js";
import "./chunk-HITDOKBC.js";
import "./chunk-ZJJKBI4V.js";
import "./chunk-CK6DU2KF.js";
import "./chunk-P5KDHCJI.js";
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
