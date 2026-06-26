import {
  UniverDocsMentionUIPlugin
} from "./chunk-YF3AHOR5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6VTAGQCI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6HRM34K4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NPCOFDKB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6INQUOUS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SZABEXV6.js";
import "./chunk-QSLAIMUQ.js";
import "./chunk-2L3QJOUR.js";
import "./chunk-OJROURM7.js";
import "./chunk-VOSZBVPG.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DHFMXJ63.js";
import "./chunk-2YSRLFYR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FCJ3BJNP.js";
import "./chunk-LLCIHVKC.js";
import "./chunk-6PEYLUFM.js";
import "./chunk-6BRE7BU4.js";
import "./chunk-WZAAH4KX.js";
import "./chunk-WATNN632.js";
import "./chunk-G54VOOXJ.js";
import "./chunk-MAKLEPR2.js";
import "./chunk-LOT2R2OM.js";
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
