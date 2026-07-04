import {
  UniverDocsMentionUIPlugin
} from "./chunk-OICVNZR4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-AWYCV672.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SG4EAPCE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-Z5DTV75F.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZBM7AOE6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-37SB4EIZ.js";
import "./chunk-HENDEQSB.js";
import "./chunk-WRDRZCZG.js";
import "./chunk-TSMXMGFP.js";
import "./chunk-ROT7BXSD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DRRIPBLC.js";
import "./chunk-HG2M4TBP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LW7LBYJO.js";
import "./chunk-F2JOBDCT.js";
import "./chunk-YKTELMTW.js";
import "./chunk-OICIWUWS.js";
import "./chunk-6TGWV6KC.js";
import "./chunk-OMMCBRCS.js";
import "./chunk-WNULU2PR.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
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
