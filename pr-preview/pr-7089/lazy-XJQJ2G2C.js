import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Z5AJHK7I.js";
import "./chunk-N5MIE4IT.js";
import "./chunk-LYL777Z2.js";
import "./chunk-3BBNCSN5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UTQ3QUPW.js";
import "./chunk-IWAV5DLX.js";
import "./chunk-ND6OWVQZ.js";
import "./chunk-JAWWWCPE.js";
import "./chunk-PWDVVLTD.js";
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
