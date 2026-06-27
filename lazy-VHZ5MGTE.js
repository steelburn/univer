import {
  UniverDocsMentionUIPlugin
} from "./chunk-4JUINEKP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BOQZ37MR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-E6P6HZ6Z.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YXIX7MTN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-A3UKNXOM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PFEBMQQV.js";
import "./chunk-X42BEKEF.js";
import "./chunk-SKYPIRIZ.js";
import "./chunk-VM2ESTPX.js";
import "./chunk-MR7OSKRT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FW5I6O3S.js";
import "./chunk-OGX7UMKT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-M75IOHPL.js";
import "./chunk-OWNWYWPL.js";
import "./chunk-6PEYLUFM.js";
import "./chunk-O7N5FSIK.js";
import "./chunk-DOP4XK2T.js";
import "./chunk-WATNN632.js";
import "./chunk-KSKNLR7K.js";
import "./chunk-LOCMHYVK.js";
import "./chunk-TJVV3XAG.js";
import "./chunk-K4NPP4YC.js";
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
