import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SG4EAPCE.js";
import "./chunk-ROT7BXSD.js";
import "./chunk-DRRIPBLC.js";
import "./chunk-HG2M4TBP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LW7LBYJO.js";
import "./chunk-F2JOBDCT.js";
import "./chunk-OICIWUWS.js";
import "./chunk-6TGWV6KC.js";
import "./chunk-OMMCBRCS.js";
import "./chunk-WNULU2PR.js";
import "./chunk-HEUNIGNJ.js";
import "./chunk-SE7GQC5E.js";
import "./chunk-7BSILHFI.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
