import {
  UniverDocsMentionUIPlugin
} from "./chunk-7EMBIHBJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4JENLBH2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WUBFADVA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OT2FYPAL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GV5KSRYY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-E4IIDIOV.js";
import "./chunk-HENDEQSB.js";
import "./chunk-WRDRZCZG.js";
import "./chunk-TSMXMGFP.js";
import "./chunk-ALX7IIV3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4Q5IA4SM.js";
import "./chunk-HG2M4TBP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3GXCL4DE.js";
import "./chunk-J2KWK7W4.js";
import "./chunk-YKTELMTW.js";
import "./chunk-YX4RPWZV.js";
import "./chunk-5BC7SV5L.js";
import "./chunk-D3LZAZGX.js";
import "./chunk-WNULU2PR.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
