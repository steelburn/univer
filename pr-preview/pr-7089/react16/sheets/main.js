import {
  en_US_default
} from "../chunk-O5WRJ65R.js";
import "../chunk-REZ6O7M2.js";
import "../chunk-62FTG3QU.js";
import "../chunk-WCT2RHB2.js";
import {
  UniverVue3AdapterPlugin,
  UniverWebComponentAdapterPlugin
} from "../chunk-FCNMGDIL.js";
import "../chunk-IOMP6V52.js";
import {
  UniverDebuggerPlugin
} from "../chunk-RKWIFMMX.js";
import "../chunk-GOEYCPF2.js";
import {
  zh_CN_default
} from "../chunk-PLO6OHDI.js";
import "../chunk-GREPP2SB.js";
import "../chunk-DBRQB4K6.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-VVCDHPF3.js";
import "../chunk-5US4NH2L.js";
import "../chunk-EYZ65XCE.js";
import {
  UniverSheetsNotePlugin,
  UniverSheetsTablePlugin
} from "../chunk-UPMFLJAE.js";
import "../chunk-HQANYSJ2.js";
import {
  UniverSheetsThreadCommentPlugin
} from "../chunk-X6XOYRVX.js";
import "../chunk-RG5KMJQN.js";
import {
  UniverSheetsHyperLinkPlugin
} from "../chunk-HUNJZ4TH.js";
import {
  UniverSheetsSortPlugin
} from "../chunk-PUQSMTNK.js";
import {
  UniverSheetsConditionalFormattingPlugin
} from "../chunk-KLCIQCV2.js";
import "../chunk-JON46KA2.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-3FAPUKMB.js";
import "../chunk-NGNEGYS4.js";
import {
  UniverSheetsUIPlugin,
  whenSheetEditorFocused
} from "../chunk-RSE4XJ65.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-6CC75HBB.js";
import {
  UniverNetworkPlugin
} from "../chunk-B7NCITP5.js";
import "../chunk-2BLR3RWD.js";
import "../chunk-F3GIICXC.js";
import "../chunk-KWWXQZKE.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverSheetsDataValidationPlugin
} from "../chunk-PYZPGY5B.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  FolderIcon,
  IContextMenuService,
  IMenuManagerService,
  IShortcutService,
  IconManager,
  UniverUIPlugin,
  require_jsx_runtime
} from "../chunk-QNYCEYFA.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-7OKPYA37.js";
import "../chunk-2FVEG47S.js";
import {
  FUniver
} from "../chunk-LDR5HMSP.js";
import "../chunk-YTTBVE7U.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-IPR36F56.js";
import {
  ClearSelectionContentCommand,
  RemoveColByRangeCommand,
  SetRangeValuesMutation,
  SetRangeValuesUndoMutationFactory,
  SetWorksheetColumnCountMutation,
  SetWorksheetColumnCountUndoMutationFactory,
  SetWorksheetRowCountMutation,
  SetWorksheetRowCountUndoMutationFactory,
  SheetsSelectionsService,
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin,
  getSheetCommandTarget
} from "../chunk-P3BUXCOC.js";
import {
  CanceledError,
  DisposableCollection,
  ICommandService,
  IRenderManagerService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  LifecycleService,
  Plugin,
  Univer,
  UniverRenderEnginePlugin,
  UserManagerService,
  combineLatest,
  covertCellValues,
  sequenceExecute
} from "../chunk-B4VGFPLO.js";
import "../chunk-EQ2B2W73.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "../chunk-HECJ2TYE.js";

// src/sheets/custom/custom-float-dom/component.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var CustomRangeLoading = () => {
  const divStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transformOrigin: "top left"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: divStyle, children: "Custom Loading..." });
};

// src/sheets/custom/custom-float-dom/float-dom.ts
function insertFloatDom(univer, univerAPI) {
  const disposableCollection = new DisposableCollection();
  const floatDomDisposables = new DisposableCollection();
  disposableCollection.add(univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {
    if (stage === univerAPI.Enum.LifecycleStages.Steady) {
      univerAPI.registerComponent("CustomRangeLoading", CustomRangeLoading);
      const fWorkbook = univerAPI.getActiveWorkbook();
      const fWorksheet = fWorkbook.getActiveSheet();
      const fRange = fWorksheet.getRange("A1:C3");
      const disposable = fWorksheet.addFloatDomToRange(fRange, { componentKey: "CustomRangeLoading" }, {}, "myRangeLoading");
      if (disposable) {
        floatDomDisposables.add(disposable);
      }
      console.warn("Float DOM", disposable);
    }
  }));
  univer.onDispose(() => {
    floatDomDisposables.dispose();
    disposableCollection.dispose();
  });
}

// src/sheets/custom/custom-range-popup/simple-range-popup.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function simpleRangePopupDemo(univer, univerAPI) {
  let activePopupWorkbookId = null;
  let activePopupDisposable = null;
  let disposed = false;
  const disposableCollection = new DisposableCollection();
  const pendingTimers = /* @__PURE__ */ new Set();
  const attachPopup = (workbook = univerAPI.getActiveWorkbook()) => {
    if (disposed || !workbook) {
      return false;
    }
    const workbookId = workbook.getId();
    if (activePopupWorkbookId) {
      return false;
    }
    const worksheet = workbook.getActiveSheet();
    if (!worksheet) {
      return false;
    }
    if (!isWorkbookCanvasMounted(workbookId)) {
      return false;
    }
    const range = worksheet.getRange("B2:D100");
    const disposable = range.attachRangePopup({
      componentKey: "MySimplePopup",
      direction: "right-bottom",
      offset: [0, 10]
    });
    if (!disposable) {
      return false;
    }
    activePopupDisposable = disposable;
    activePopupWorkbookId = workbookId;
    return true;
  };
  const scheduleAttachPopup = (workbook = univerAPI.getActiveWorkbook()) => {
    const delays = [0, 100, 300, 1e3];
    delays.forEach((delay) => {
      const timer = setTimeout(() => {
        pendingTimers.delete(timer);
        attachPopup(workbook);
      }, delay);
      pendingTimers.add(timer);
    });
  };
  univerAPI.registerComponent("MySimplePopup", () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      style: {
        padding: "8px",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        color: "#333"
      },
      children: "Hello from Range Popup!"
    }
  ));
  disposableCollection.add(
    univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
      if (params.stage === 2 /* Rendered */) {
        scheduleAttachPopup();
      }
    })
  );
  disposableCollection.add(
    univerAPI.addEvent(univerAPI.Event.WorkbookCreated, ({ workbook }) => {
      scheduleAttachPopup(workbook);
    })
  );
  univer.onDispose(() => {
    disposed = true;
    pendingTimers.forEach((timer) => clearTimeout(timer));
    pendingTimers.clear();
    activePopupDisposable == null ? void 0 : activePopupDisposable.dispose();
    activePopupDisposable = null;
    activePopupWorkbookId = null;
    disposableCollection.dispose();
  });
}
function isWorkbookCanvasMounted(workbookId) {
  if (typeof document === "undefined") {
    return false;
  }
  const canvas = document.getElementById(`univer-sheet-main-canvas_${workbookId}`);
  const rect = canvas == null ? void 0 : canvas.getBoundingClientRect();
  return !!(canvas == null ? void 0 : canvas.parentElement) && !!rect && rect.width > 0 && rect.height > 0;
}

// src/sheets/custom/custom-register-event.ts
function customRegisterEvent(univer, univerAPI) {
  const disposableCollection = new DisposableCollection();
  const pendingTimers = /* @__PURE__ */ new Set();
  const scheduleTimer = (callback, delay) => {
    const timer = setTimeout(() => {
      pendingTimers.delete(timer);
      callback();
    }, delay);
    pendingTimers.add(timer);
  };
  registerMainRightClickEvent(univer, univerAPI);
  disposableCollection.add(
    univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {
      if (stage === univerAPI.Enum.LifecycleStages.Steady) {
        registerRemoveColumnEvent(univer, univerAPI);
        registerBeforeRemoveColumnEvent(univer, univerAPI);
        disposableCollection.add(univerAPI.addEvent("MainRightClickEvent", (params) => {
          const { row, column } = params;
          console.warn(`Right clicked on cell at ${univerAPI.Util.tools.chatAtABC(column)}${row + 1}`);
          if (row === 0 && column === 0) {
            params.cancel = true;
          }
        }));
        disposableCollection.add(univerAPI.addEvent("RemoveColumnEvent", (params) => {
          const { startColumn, endColumn } = params;
          console.warn(`Removed columns from ${univerAPI.Util.tools.chatAtABC(startColumn)} to ${univerAPI.Util.tools.chatAtABC(endColumn)}`);
        }));
        const beforeRemoveColumnEventDisposable = univerAPI.addEvent("BeforeRemoveColumnEvent", (params) => {
          const { startColumn, endColumn } = params;
          console.warn(`Before removing columns from ${univerAPI.Util.tools.chatAtABC(startColumn)} to ${univerAPI.Util.tools.chatAtABC(endColumn)}`);
          if (!(startColumn > 4 || endColumn < 2)) {
            params.cancel = true;
            console.warn("Cannot delete column C to E");
          }
        });
        disposableCollection.add(beforeRemoveColumnEventDisposable);
        scheduleTimer(() => {
          beforeRemoveColumnEventDisposable.dispose();
          console.warn("BeforeRemoveColumnEvent listener has been removed, you can delete any columns now.");
        }, 1e4);
      }
    })
  );
  univer.onDispose(() => {
    pendingTimers.forEach((timer) => clearTimeout(timer));
    pendingTimers.clear();
    disposableCollection.dispose();
  });
}
function registerMainRightClickEvent(univer, univerAPI) {
  const injector = univer.__getInjector();
  const renderManagerService = injector.get(IRenderManagerService);
  const lifeCycleService = injector.get(LifecycleService);
  const contextMenuService = injector.get(IContextMenuService);
  let sheetRenderUnit;
  const combined$ = combineLatest([
    renderManagerService.created$,
    lifeCycleService.lifecycle$
  ]);
  const disposable = new DisposableCollection();
  univerAPI.disposeWithMe(combined$.subscribe(([created, lifecycle]) => {
    if (created.type === 2 /* UNIVER_SHEET */) {
      sheetRenderUnit = created;
    }
    if (lifecycle <= 2 /* Rendered */) return;
    if (!sheetRenderUnit) return;
    const { components } = sheetRenderUnit;
    const mainComponent = components.get("__SpreadsheetRender__" /* MAIN */);
    if (!mainComponent) return;
    const fWorkbook = univerAPI.getWorkbook(sheetRenderUnit.unitId);
    if (!fWorkbook) return;
    const fWorksheet = fWorkbook.getActiveSheet();
    if (!fWorksheet) return;
    disposable.dispose();
    disposable.add(
      univerAPI.registerEventHandler(
        "MainRightClickEvent",
        () => mainComponent.onPointerDown$.subscribeEvent((event) => {
          var _a, _b;
          if (event.button !== 2) return;
          const activeRange = fWorksheet.getActiveRange();
          const eventParams = {
            event,
            row: (_a = activeRange == null ? void 0 : activeRange.getRow()) != null ? _a : 0,
            column: (_b = activeRange == null ? void 0 : activeRange.getColumn()) != null ? _b : 0
          };
          univerAPI.fireEvent("MainRightClickEvent", eventParams);
          if (eventParams.cancel) {
            requestAnimationFrame(() => {
              contextMenuService.hideContextMenu();
            });
          }
        })
      )
    );
    univerAPI.disposeWithMe(disposable);
  }));
}
function registerRemoveColumnEvent(univer, univerAPI) {
  const injector = univer.__getInjector();
  const commandService = injector.get(ICommandService);
  univerAPI.disposeWithMe(
    univerAPI.registerEventHandler(
      "RemoveColumnEvent",
      () => commandService.onCommandExecuted((commandInfo) => {
        if (commandInfo.id !== RemoveColByRangeCommand.id) return;
        const target = univerAPI.getSheetCommandTarget(commandInfo.params);
        if (!target) return;
        const { range } = commandInfo.params;
        const eventParams = {
          workbook: target.workbook,
          worksheet: target.worksheet,
          startColumn: range.startColumn,
          endColumn: range.endColumn
        };
        univerAPI.fireEvent("RemoveColumnEvent", eventParams);
      })
    )
  );
}
function registerBeforeRemoveColumnEvent(univer, univerAPI) {
  const injector = univer.__getInjector();
  const commandService = injector.get(ICommandService);
  univerAPI.disposeWithMe(
    univerAPI.registerEventHandler(
      "BeforeRemoveColumnEvent",
      () => commandService.beforeCommandExecuted((commandInfo) => {
        if (commandInfo.id !== RemoveColByRangeCommand.id) return;
        const target = univerAPI.getSheetCommandTarget(commandInfo.params);
        if (!target) return;
        const { range } = commandInfo.params;
        const eventParams = {
          workbook: target.workbook,
          worksheet: target.worksheet,
          startColumn: range.startColumn,
          endColumn: range.endColumn
        };
        univerAPI.fireEvent("BeforeRemoveColumnEvent", eventParams);
        if (eventParams.cancel) {
          throw new CanceledError();
        }
      })
    )
  );
}

// src/sheets/custom/custom-shortcut/commands/commands/custom.command.ts
var CustomClearSelectionContentCommand = {
  id: "sheet.command.custom-clear-selection-content",
  type: 0 /* COMMAND */,
  handler: (accessor) => {
    var _a;
    const target = getSheetCommandTarget(accessor.get(IUniverInstanceService));
    if (!target) return false;
    const { unitId, subUnitId, worksheet } = target;
    const selectionManagerService = accessor.get(SheetsSelectionsService);
    const range = (_a = selectionManagerService.getCurrentLastSelection()) == null ? void 0 : _a.range;
    if (!range) return false;
    const commandService = accessor.get(ICommandService);
    const { startRow, endRow, startColumn, endColumn } = range;
    const isSingleCell = startRow === endRow && startColumn === endColumn;
    if (isSingleCell && startRow === 2 && startColumn === 2) {
      return commandService.executeCommand(ClearSelectionContentCommand.id, {
        unitId,
        subUnitId,
        ranges: [
          {
            startRow,
            endRow,
            startColumn: 0,
            endColumn: worksheet.getMaxColumns() - 1
          }
        ]
      });
    } else {
      return commandService.executeCommand(ClearSelectionContentCommand.id, {
        unitId,
        subUnitId,
        ranges: [
          {
            startRow,
            endRow,
            startColumn,
            endColumn
          }
        ]
      });
    }
  }
};

// src/sheets/custom/custom-shortcut/controllers/shortcuts/custom.shortcut.ts
var CustomClearSelectionValueShortcutItem = {
  id: CustomClearSelectionContentCommand.id,
  // high priority to ensure it is checked first
  priority: 9999,
  // when focusing on any other input tag do not trigger this shortcut
  preconditions: whenSheetEditorFocused,
  binding: 46 /* DELETE */,
  mac: 8 /* BACKSPACE */
};

// src/sheets/custom/custom-shortcut/plugin.ts
var SHEET_CUSTOM_SHORTCUT_PLUGIN = "SHEET_CUSTOM_SHORTCUT_PLUGIN";
var UniverSheetsCustomShortcutPlugin = class extends Plugin {
  constructor(_config = void 0, _injector, _commandService, _shortcutService) {
    super();
    __publicField(this, "_injector", _injector);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_shortcutService", _shortcutService);
    this._initCommands();
    this._initShortcuts();
  }
  _initCommands() {
    [
      CustomClearSelectionContentCommand
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
  }
  _initShortcuts() {
    [
      CustomClearSelectionValueShortcutItem
    ].forEach((item) => this.disposeWithMe(this._shortcutService.registerShortcut(item)));
  }
};
__publicField(UniverSheetsCustomShortcutPlugin, "type", 2 /* UNIVER_SHEET */);
__publicField(UniverSheetsCustomShortcutPlugin, "pluginName", SHEET_CUSTOM_SHORTCUT_PLUGIN);
UniverSheetsCustomShortcutPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IShortcutService)
], UniverSheetsCustomShortcutPlugin);

// src/sheets/custom/import-csv-button.ts
function waitUserSelectCSVFile(onSelect) {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.click();
    input.onchange = () => {
      var _a;
      const file = (_a = input.files) == null ? void 0 : _a[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        if (typeof text !== "string") return;
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
  // eslint-disable-next-line max-lines-per-function
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
      ["ribbon.others.others" /* OTHERS */]: {
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

// src/sheets/main.ts
var IS_E2E = false;
var LOAD_LAZY_PLUGINS_TIMEOUT = 50;
var LOAD_VERY_LAZY_PLUGINS_TIMEOUT = 100;
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
function createNewInstance() {
  const univer = new Univer({
    locale: "enUS" /* EN_US */,
    locales: {
      ["enUS" /* EN_US */]: en_US_default,
      ["zhCN" /* ZH_CN */]: zh_CN_default
    },
    logLevel: 4 /* VERBOSE */
  });
  const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
  univer.registerPlugins([
    [UniverRPCMainThreadPlugin, { workerURL: worker }],
    [UniverDocsPlugin],
    [UniverRenderEnginePlugin],
    [UniverUIPlugin, {
      container: "app",
      customFontFamily: {
        list: [
          { value: "PingFang SC", label: "\u82F9\u65B9\uFF08\u7B80\uFF09", category: "sans-serif" },
          { value: "Helvetica Neue", label: "Helvetica Neue", category: "sans-serif" }
        ]
        // override: true,
      }
    }],
    [UniverWebComponentAdapterPlugin],
    [UniverVue3AdapterPlugin],
    [UniverDocsUIPlugin],
    [UniverSheetsPlugin, {
      notExecuteFormula: true,
      autoHeightForMergedCells: true
    }],
    [UniverSheetsUIPlugin],
    [UniverSheetsNumfmtPlugin],
    [UniverFormulaEnginePlugin, { notExecuteFormula: true }],
    [UniverSheetsFormulaPlugin, { notExecuteFormula: true }],
    [UniverSheetsDataValidationPlugin],
    [UniverSheetsConditionalFormattingPlugin],
    [UniverSheetsFilterPlugin],
    [UniverSheetsSortPlugin],
    [UniverSheetsHyperLinkPlugin],
    [UniverSheetsThreadCommentPlugin],
    [UniverSheetsTablePlugin],
    [UniverNetworkPlugin],
    [UniverSheetsNotePlugin],
    [import_csv_button_default],
    [UniverSheetsCustomShortcutPlugin]
  ]);
  if (IS_E2E) {
    univer.registerPlugin(UniverDebuggerPlugin, {
      fab: false,
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale,
      performanceMonitor: {
        enabled: false
      }
    });
  }
  const injector = univer.__getInjector();
  const userManagerService = injector.get(UserManagerService);
  userManagerService.setCurrentUser(mockUser);
  if (!IS_E2E) {
    univer.createUnit(2 /* UNIVER_SHEET */, DEFAULT_WORKBOOK_DATA_DEMO);
  }
  setTimeout(() => {
    import("../lazy-JPRWHYOO.js").then((lazy) => {
      const plugins = lazy.default();
      univer.registerPlugins(plugins);
    });
  }, LOAD_LAZY_PLUGINS_TIMEOUT);
  setTimeout(() => {
    import("../very-lazy-4JVZYFMR.js").then((lazy) => {
      const plugins = lazy.default();
      univer.registerPlugins(plugins);
    });
  }, LOAD_VERY_LAZY_PLUGINS_TIMEOUT);
  univer.onDispose(() => {
    worker.terminate();
    window.univer = void 0;
    window.univerAPI = void 0;
  });
  window.univer = univer;
  window.univerAPI = FUniver.newAPI(univer);
  customRegisterEvent(univer, window.univerAPI);
  simpleRangePopupDemo(univer, window.univerAPI);
  insertFloatDom(univer, window.univerAPI);
}
createNewInstance();
window.createNewInstance = createNewInstance;
export {
  mockUser
};
