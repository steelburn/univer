import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-64ZZ5AG6.js";
import "./chunk-N5MIE4IT.js";
import "./chunk-KELN34AS.js";
import "./chunk-3BBNCSN5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EXKNWFSF.js";
import "./chunk-QSOVMFUQ.js";
import "./chunk-RDA67HDS.js";
import "./chunk-CRWIVMZJ.js";
import "./chunk-BVX7VFBB.js";
import "./chunk-HITDOKBC.js";
import "./chunk-ZJJKBI4V.js";
import "./chunk-CK6DU2KF.js";
import "./chunk-P5KDHCJI.js";
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
