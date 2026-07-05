import {
  UniverDocsMentionUIPlugin
} from "./chunk-22RVU7FA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-64I34E2W.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JLUUXD3K.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HLJDDA5A.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OQUBAJCO.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OHPLJPLR.js";
import "./chunk-WD4S43QL.js";
import "./chunk-PHEUIUNT.js";
import "./chunk-SBAKQZSC.js";
import "./chunk-OFIANAVS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-AB2ASX4N.js";
import "./chunk-3NXY3SOX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XMZGDVTQ.js";
import "./chunk-TIEX6CJH.js";
import "./chunk-5IECQFZK.js";
import "./chunk-IZ46N3AS.js";
import "./chunk-RZPW4CGI.js";
import "./chunk-MEUEE4XB.js";
import "./chunk-XIWGWHOE.js";
import "./chunk-5MHJTTDS.js";
import "./chunk-X7DAPWNR.js";
import "./chunk-V6KA3GW7.js";
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
