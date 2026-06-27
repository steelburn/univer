import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2HRR3N53.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DN3SE3RV.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-FLTTNWE3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HLGWEAX6.js";
import "./chunk-W56PGVYT.js";
import "./chunk-LGD34FPP.js";
import "./chunk-KDIWPSY2.js";
import "./chunk-WIUUEXYB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V5ZQE3FL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DYR27BI3.js";
import "./chunk-QUHIKIEB.js";
import "./chunk-EIAWKFP7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OJDH3EIP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TKJ44BLP.js";
import "./chunk-CDKUTHSD.js";
import "./chunk-6MBQ2LW4.js";
import "./chunk-GMQ4GLVG.js";
import "./chunk-TWPETBMX.js";
import "./chunk-JPAQCREO.js";
import "./chunk-E7MFA523.js";
import "./chunk-XDSNGS3M.js";
import "./chunk-JD4X33BA.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
