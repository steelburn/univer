import "../chunk-YODVHBPO.js";
import "../chunk-FISPIW6I.js";
import {
  UniverDebuggerPlugin
} from "../chunk-OBBHNONC.js";
import "../chunk-2WOCRTT4.js";
import {
  zh_CN_default
} from "../chunk-PLO6OHDI.js";
import "../chunk-6DQW37F6.js";
import "../chunk-DBRQB4K6.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-Y4NWSE5T.js";
import "../chunk-6RGL6O3X.js";
import "../chunk-ODON5TX6.js";
import {
  UniverSheetsNotePlugin,
  UniverSheetsTablePlugin
} from "../chunk-7YK65KMN.js";
import "../chunk-464LOL6K.js";
import {
  UniverSheetsThreadCommentPlugin
} from "../chunk-E5D3NWK4.js";
import "../chunk-XSOX5HRX.js";
import {
  UniverSheetsHyperLinkPlugin
} from "../chunk-TDKEO627.js";
import {
  UniverSheetsSortPlugin
} from "../chunk-LLWLDPCD.js";
import {
  UniverSheetsConditionalFormattingPlugin
} from "../chunk-DKCV6UIT.js";
import "../chunk-LAB3P5WS.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-DDASKM27.js";
import "../chunk-HMG34QTQ.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-WODLW4WL.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-KQNVO4KD.js";
import {
  UniverNetworkPlugin
} from "../chunk-UPUZUEZ3.js";
import "../chunk-6PIPBXM2.js";
import "../chunk-R2NUHHOI.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverSheetsDataValidationPlugin
} from "../chunk-RR6M52SX.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-H3L5AYK5.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-WMKYTCYP.js";
import "../chunk-2FVEG47S.js";
import {
  FUniver
} from "../chunk-5K7IENYW.js";
import "../chunk-YTTBVE7U.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4ZVILBEQ.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-PD2XMV4N.js";
import {
  Univer,
  UniverRenderEnginePlugin,
  UserManagerService
} from "../chunk-AM2UDTII.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets-no-worker/main.ts
var IS_E2E = false;
var LOAD_LAZY_PLUGINS_TIMEOUT = 100;
var LOAD_VERY_LAZY_PLUGINS_TIMEOUT = 1e3;
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
function createNewInstance() {
  const univer = new Univer({
    // theme: greenTheme,
    darkMode: localStorage.getItem("local.darkMode") === "dark",
    locale: "zhCN" /* ZH_CN */,
    locales: {
      ["zhCN" /* ZH_CN */]: zh_CN_default
    },
    logLevel: 4 /* VERBOSE */
  });
  const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
  univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
  univer.registerPlugin(UniverDocsPlugin);
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: "app",
    ribbonType: "classic"
  });
  univer.registerPlugin(UniverDocsUIPlugin);
  univer.registerPlugin(UniverSheetsPlugin, {
    autoHeightForMergedCells: true
  });
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsNumfmtPlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin, { writeArrayFormulaToSnapshot: true });
  univer.registerPlugin(UniverSheetsDataValidationPlugin);
  univer.registerPlugin(UniverSheetsConditionalFormattingPlugin);
  univer.registerPlugin(UniverSheetsFilterPlugin);
  univer.registerPlugin(UniverSheetsSortPlugin);
  univer.registerPlugin(UniverSheetsHyperLinkPlugin);
  univer.registerPlugin(UniverSheetsThreadCommentPlugin);
  univer.registerPlugin(UniverSheetsTablePlugin);
  univer.registerPlugin(UniverNetworkPlugin);
  univer.registerPlugin(UniverSheetsNotePlugin);
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
    import("../lazy-BEQIYZMY.js").then((lazy) => {
      const plugins = lazy.default();
      plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
    });
  }, LOAD_LAZY_PLUGINS_TIMEOUT);
  setTimeout(() => {
    import("../very-lazy-Q76SLXAO.js").then((lazy) => {
      const plugins = lazy.default();
      plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
    });
  }, LOAD_VERY_LAZY_PLUGINS_TIMEOUT);
  univer.onDispose(() => {
    worker.terminate();
    window.univer = void 0;
    window.univerAPI = void 0;
  });
  window.univer = univer;
  window.univerAPI = FUniver.newAPI(univer);
}
createNewInstance();
window.createNewInstance = createNewInstance;
export {
  mockUser
};
