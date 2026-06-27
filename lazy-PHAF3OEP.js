import {
  UniverDocsMentionUIPlugin
} from "./chunk-SBF2V2HN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4NHTFTYY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RJQ7PIDM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-V7AEJ6RT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-N7H56FM6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-V6MDNJVG.js";
import "./chunk-SBPWLSI7.js";
import "./chunk-TJQFCLC3.js";
import "./chunk-Y4YKRG2S.js";
import "./chunk-6CLVDI6D.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LSGVOUI4.js";
import "./chunk-TB5G4PNE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SAGL4BN6.js";
import "./chunk-L34UUFNM.js";
import "./chunk-LF4TJ2IQ.js";
import "./chunk-L4S74WID.js";
import "./chunk-M5GVC7ON.js";
import "./chunk-ANUQL4BY.js";
import "./chunk-NG4STN57.js";
import "./chunk-SAPNNB2H.js";
import "./chunk-QKZFJOI6.js";
import "./chunk-NMSWDVJS.js";
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
