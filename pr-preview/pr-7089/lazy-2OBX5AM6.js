import {
  UniverDocsMentionUIPlugin
} from "./chunk-QZDZQNZG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NWXENKHB.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AIREBQ5K.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FXQAWNC7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JMEIS6MP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3YXQW6JW.js";
import "./chunk-2RIRF74O.js";
import "./chunk-JYPQW52O.js";
import "./chunk-N55QRDMN.js";
import "./chunk-KCKEB4IG.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6RQ2HL64.js";
import "./chunk-UE7VRHMB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SW6NDM5N.js";
import "./chunk-37PGBMEZ.js";
import "./chunk-VAF6RY7S.js";
import "./chunk-TQ4Q34OY.js";
import "./chunk-ROJLKGUP.js";
import "./chunk-D4NC5GSO.js";
import "./chunk-2E7K7WJG.js";
import "./chunk-AWTJ57BU.js";
import "./chunk-4MD24DFJ.js";
import "./chunk-2OKSGSKY.js";
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
