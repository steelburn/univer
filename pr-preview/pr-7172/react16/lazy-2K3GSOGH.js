import {
  UniverDocsMentionUIPlugin
} from "./chunk-O7W3XJD7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MVNYWYXU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7Z43UVQR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MW7JLDDX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FZLYHWCL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5G2NVEEJ.js";
import "./chunk-ZUXBNEMK.js";
import "./chunk-AQNRTCI5.js";
import "./chunk-NKSRF3PJ.js";
import "./chunk-6DW64JZ7.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-C6F4SNOR.js";
import "./chunk-Z2NTRMDG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-B7Y55ADG.js";
import "./chunk-RTHKTSDC.js";
import "./chunk-H6OXEYL5.js";
import "./chunk-UM4NOZER.js";
import "./chunk-YVVQNTTI.js";
import "./chunk-HRNSATQF.js";
import "./chunk-ZYQWQPP7.js";
import "./chunk-UQCVZIYI.js";
import "./chunk-OILB55V4.js";
import "./chunk-AQVHF73V.js";
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
