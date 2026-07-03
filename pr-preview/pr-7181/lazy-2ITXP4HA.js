import {
  UniverDocsMentionUIPlugin
} from "./chunk-MBAQ2KPT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FLRAE3XV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VWX22Z4O.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5GJUCZDU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-Z2PVM4QI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-U2CWTYKQ.js";
import "./chunk-H6IKFNUB.js";
import "./chunk-WEH6UA5C.js";
import "./chunk-LBKVQ5E5.js";
import "./chunk-TG5VI7XE.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7333WJQZ.js";
import "./chunk-LSASRAKL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R5ROZDVG.js";
import "./chunk-HE5S6ZI6.js";
import "./chunk-NPMILPK4.js";
import "./chunk-QIHEWUMB.js";
import "./chunk-OSRB4DA7.js";
import "./chunk-7FAIONDU.js";
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
