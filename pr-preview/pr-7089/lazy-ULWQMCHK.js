import {
  UniverDocsMentionUIPlugin
} from "./chunk-GY3WQKTF.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OQ36OLW7.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OOEJGI2U.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3XK5WDT6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JBHKGRKR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DZBYY7NT.js";
import "./chunk-IPBHHSIK.js";
import "./chunk-PGVXIOH2.js";
import "./chunk-5AHFJDRZ.js";
import "./chunk-MH4F6PIU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-V4LAGLIJ.js";
import "./chunk-L765PEWF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A5EHG7DP.js";
import "./chunk-J6TJFUJJ.js";
import "./chunk-DA75FTEE.js";
import "./chunk-EYOA5CW3.js";
import "./chunk-Y44STU53.js";
import "./chunk-5VTXYISK.js";
import "./chunk-PAB77PEQ.js";
import "./chunk-AHI4XB5F.js";
import "./chunk-LFCAT4GF.js";
import "./chunk-CBGIOZGI.js";
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
