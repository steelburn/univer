import {
  UniverDocsMentionUIPlugin
} from "./chunk-T57BSNC4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TK75OEYC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3M4F3GV3.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DSISSBOX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-AWFEG5PH.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WNJT36AR.js";
import "./chunk-7YK65KMN.js";
import "./chunk-E5D3NWK4.js";
import "./chunk-LLWLDPCD.js";
import "./chunk-DKCV6UIT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FVXS3NDV.js";
import "./chunk-DDASKM27.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4K3FZAUD.js";
import "./chunk-65RQLEP2.js";
import "./chunk-6PIPBXM2.js";
import "./chunk-JKMQOKXV.js";
import "./chunk-LENITDPL.js";
import "./chunk-H3L5AYK5.js";
import "./chunk-WMKYTCYP.js";
import "./chunk-4ZVILBEQ.js";
import "./chunk-PD2XMV4N.js";
import "./chunk-AM2UDTII.js";
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
