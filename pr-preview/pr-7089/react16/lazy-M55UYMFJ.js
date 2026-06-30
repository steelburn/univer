import {
  UniverDocsMentionUIPlugin
} from "./chunk-UPCKIBEH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SJX3RG3O.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DGMUDXL3.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NFJFC5RR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-HZLHLKAS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UHOLBSIO.js";
import "./chunk-D2M5HBJG.js";
import "./chunk-M7CI6FWO.js";
import "./chunk-XJ5O6GIH.js";
import "./chunk-JFCZKNRZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WJNYMSGH.js";
import "./chunk-JMVK2T7D.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JPVPGKKO.js";
import "./chunk-D3FNGKGK.js";
import "./chunk-OP4GICEG.js";
import "./chunk-RFOTKZBQ.js";
import "./chunk-G4ASLNLH.js";
import "./chunk-NHSJ25AF.js";
import "./chunk-P7OEMKO4.js";
import "./chunk-HFTONCIN.js";
import "./chunk-XANA7DTY.js";
import "./chunk-IOKMYXS7.js";
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
