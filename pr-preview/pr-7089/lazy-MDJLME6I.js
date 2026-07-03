import {
  UniverDocsMentionUIPlugin
} from "./chunk-FO4GFNAB.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MCVC7D6A.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GGBH7XNI.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OMM4WR6Q.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-O4BHW4JP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BGLNA63Z.js";
import "./chunk-NZS5OV26.js";
import "./chunk-5YJOA4L7.js";
import "./chunk-WQGB73FZ.js";
import "./chunk-GFDOKAZY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GLYVBXWL.js";
import "./chunk-HCWYKH27.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NIVGGNXK.js";
import "./chunk-JKXKREPW.js";
import "./chunk-VAF6RY7S.js";
import "./chunk-3S4UFDZZ.js";
import "./chunk-RYDZUMMQ.js";
import "./chunk-D4NC5GSO.js";
import "./chunk-ZKOOUDQJ.js";
import "./chunk-F77LJMQC.js";
import "./chunk-6P4JMQYP.js";
import "./chunk-2OKSGSKY.js";
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
