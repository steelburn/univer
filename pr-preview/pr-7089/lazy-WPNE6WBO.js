import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AIREBQ5K.js";
import "./chunk-KCKEB4IG.js";
import "./chunk-6RQ2HL64.js";
import "./chunk-UE7VRHMB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SW6NDM5N.js";
import "./chunk-37PGBMEZ.js";
import "./chunk-TQ4Q34OY.js";
import "./chunk-ROJLKGUP.js";
import "./chunk-D4NC5GSO.js";
import "./chunk-2E7K7WJG.js";
import "./chunk-AWTJ57BU.js";
import "./chunk-4MD24DFJ.js";
import "./chunk-2OKSGSKY.js";
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
