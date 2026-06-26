import {
  UniverDocsMentionUIPlugin
} from "./chunk-2ZUTMQFA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7EW4QJCM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XNXDNTL4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-52IKK5D4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YNKMPX3I.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FTNK75LC.js";
import "./chunk-AZBCZ3JA.js";
import "./chunk-HNWEDPS2.js";
import "./chunk-FTUFSAE3.js";
import "./chunk-U5UIVYHP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-2OJD6WGW.js";
import "./chunk-4KTSUL7F.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IJ45CVVE.js";
import "./chunk-TW7PBWPG.js";
import "./chunk-EFRBMLIR.js";
import "./chunk-H2V6DEOX.js";
import "./chunk-OV5I2EGD.js";
import "./chunk-KXYBSBSD.js";
import "./chunk-T6EDKS5T.js";
import "./chunk-BRBIZH26.js";
import "./chunk-ZCW3JLGF.js";
import "./chunk-3DN27AFH.js";
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
