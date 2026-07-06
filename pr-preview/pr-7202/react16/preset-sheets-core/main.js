import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-FYNR25CS.js";
import "../chunk-KHOH3JI3.js";
import "../chunk-5GT4B6BH.js";
import "../chunk-H6H3UMC7.js";
import "../chunk-B37NLZO3.js";
import "../chunk-5KNEAR73.js";
import "../chunk-2LBWT6B5.js";
import "../chunk-2WY4MIB4.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-IVCVETJK.js";
import "../chunk-2DBVIRD6.js";
import "../chunk-65R2GNPX.js";
import "../chunk-ZODLRRYT.js";
import "../chunk-WJ52ZBC7.js";
import "../chunk-XBQUB3V7.js";
import "../chunk-YFOI2CTW.js";
import "../chunk-DQCKPR3K.js";
import "../chunk-DBSCVVZF.js";
import "../chunk-VNY7SZ2G.js";
import "../chunk-RIV26ZAQ.js";
import "../chunk-PG7FNUSK.js";
import "../chunk-EAYEQJ4J.js";
import "../chunk-GQEKXTHQ.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-IM5RNG2Z.js";
import "../chunk-YWA6VLD6.js";
import "../chunk-Y5YWUSJA.js";
import "../chunk-O4AGYTA4.js";
import "../chunk-2JOIDZXJ.js";
import "../chunk-U3S5TFOV.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import {
  FolderIcon,
  IMenuManagerService,
  IconManager
} from "../chunk-KBDFGRW6.js";
import "../chunk-3XVATOG6.js";
import "../chunk-2FVEG47S.js";
import "../chunk-4FBQDXX6.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-7MAGD6AG.js";
import {
  SetRangeValuesMutation,
  SetRangeValuesUndoMutationFactory,
  SetWorksheetColumnCountMutation,
  SetWorksheetColumnCountUndoMutationFactory,
  SetWorksheetRowCountMutation,
  SetWorksheetRowCountUndoMutationFactory
} from "../chunk-65ZVRLT5.js";
import {
  ICommandService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  Plugin,
  covertCellValues,
  default_default,
  mergeLocales,
  sequenceExecute
} from "../chunk-LM6KX6ET.js";
import "../chunk-EQ2B2W73.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "../chunk-HECJ2TYE.js";

// src/preset-sheets-core/custom-plugin/import-csv-button.ts
function waitUserSelectCSVFile(onSelect) {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.click();
    input.onchange = () => {
      var _a;
      const file = (_a = input.files) == null ? void 0 : _a[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        if (typeof text !== "string") {
          return;
        }
        const rows = text.split(/\r\n|\n/);
        const data = rows.map((line) => line.split(","));
        const colsCount = data.reduce((max, row) => Math.max(max, row.length), 0);
        const result = onSelect({
          data,
          colsCount,
          rowsCount: data.length
        });
        resolve(result);
      };
      reader.readAsText(file);
    };
  });
}
var ImportCSVButtonPlugin = class extends Plugin {
  constructor(_config, _injector, _menuManagerService, _commandService, _iconManager) {
    super();
    __publicField(this, "_injector", _injector);
    __publicField(this, "_menuManagerService", _menuManagerService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_iconManager", _iconManager);
  }
  /**
   * The first lifecycle of the plugin mounted on the Univer instance,
   * the Univer business instance has not been created at this time.
   * The plugin should add its own module to the dependency injection system at this lifecycle.
   * It is not recommended to initialize the internal module of the plugin outside this lifecycle.
   */
  onStarting() {
    this.disposeWithMe(
      this._iconManager.register("FolderIcon2", FolderIcon)
    );
    const buttonId = "import-csv-button";
    const command = {
      type: 1 /* OPERATION */,
      id: buttonId,
      handler: (accessor) => {
        const univerInstanceService = accessor.get(IUniverInstanceService);
        const commandService = accessor.get(ICommandService);
        const undoRedoService = accessor.get(IUndoRedoService);
        const worksheet = univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */).getActiveSheet();
        const unitId = worksheet.getUnitId();
        const subUnitId = worksheet.getSheetId();
        return waitUserSelectCSVFile(({ data, rowsCount, colsCount }) => {
          const redoMutations = [];
          const undoMutations = [];
          const setRowCountMutationRedoParams = {
            unitId,
            subUnitId,
            rowCount: rowsCount
          };
          const setRowCountMutationUndoParams = SetWorksheetRowCountUndoMutationFactory(
            accessor,
            setRowCountMutationRedoParams
          );
          redoMutations.push({ id: SetWorksheetRowCountMutation.id, params: setRowCountMutationRedoParams });
          undoMutations.push({ id: SetWorksheetRowCountMutation.id, params: setRowCountMutationUndoParams });
          const setColumnCountMutationRedoParams = {
            unitId,
            subUnitId,
            columnCount: colsCount
          };
          const setColumnCountMutationUndoParams = SetWorksheetColumnCountUndoMutationFactory(
            accessor,
            setColumnCountMutationRedoParams
          );
          redoMutations.push({ id: SetWorksheetColumnCountMutation.id, params: setColumnCountMutationRedoParams });
          undoMutations.unshift({ id: SetWorksheetColumnCountMutation.id, params: setColumnCountMutationUndoParams });
          const cellValue = covertCellValues(data, {
            startColumn: 0,
            // start column index
            startRow: 0,
            // start row index
            endColumn: colsCount - 1,
            // end column index
            endRow: rowsCount - 1
            // end row index
          });
          const setRangeValuesMutationRedoParams = {
            unitId,
            subUnitId,
            cellValue
          };
          const setRangeValuesMutationUndoParams = SetRangeValuesUndoMutationFactory(
            accessor,
            setRangeValuesMutationRedoParams
          );
          redoMutations.push({ id: SetRangeValuesMutation.id, params: setRangeValuesMutationRedoParams });
          undoMutations.unshift({ id: SetRangeValuesMutation.id, params: setRangeValuesMutationUndoParams });
          const result = sequenceExecute(redoMutations, commandService);
          if (result.result) {
            undoRedoService.pushUndoRedo({
              unitID: unitId,
              undoMutations,
              redoMutations
            });
            return true;
          }
          return false;
        });
      }
    };
    const menuItemFactory = () => ({
      id: buttonId,
      title: "Import CSV",
      tooltip: "Import CSV",
      icon: "FolderIcon2",
      // icon name
      type: 0 /* BUTTON */
    });
    this._menuManagerService.mergeMenu({
      ["ribbon.start.others" /* OTHERS */]: {
        [buttonId]: {
          order: 10,
          menuItemFactory
        }
      }
    });
    this._commandService.registerCommand(command);
  }
};
__publicField(ImportCSVButtonPlugin, "pluginName", "import-csv-plugin");
ImportCSVButtonPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(IMenuManagerService)),
  __decorateParam(3, Inject(ICommandService)),
  __decorateParam(4, Inject(IconManager))
], ImportCSVButtonPlugin);
var import_csv_button_default = ImportCSVButtonPlugin;

// src/preset-sheets-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset(),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ],
  plugins: [
    import_csv_button_default
  ]
});
univerAPI.createWorkbook({ name: "Test Sheet" });
window.univer = univer;
window.univerAPI = univerAPI;
