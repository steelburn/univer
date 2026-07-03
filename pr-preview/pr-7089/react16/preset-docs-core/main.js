import {
  UniverDocsHyperLinkPlugin,
  UniverDocsHyperLinkUIPlugin,
  UniverDocsThreadCommentUIPlugin
} from "../chunk-BMYPFM3Z.js";
import {
  UniverThreadCommentUIPlugin
} from "../chunk-BGLNA63Z.js";
import {
  createUniver
} from "../chunk-YS4WQDEC.js";
import {
  UniverDocsDrawingUIPlugin
} from "../chunk-7G7OAP54.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4
} from "../chunk-DBRQB4K6.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-MVJUZ2RL.js";
import "../chunk-C5AARPEF.js";
import {
  UniverNetworkPlugin
} from "../chunk-UGCUHWAI.js";
import "../chunk-IJQYQ7JF.js";
import "../chunk-VAF6RY7S.js";
import {
  UniverDocsDrawingPlugin,
  UniverDrawingUIPlugin
} from "../chunk-3S4UFDZZ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverDrawingPlugin
} from "../chunk-RYDZUMMQ.js";
import {
  zh_CN_default as zh_CN_default6,
  zh_CN_default2 as zh_CN_default8
} from "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-D4NC5GSO.js";
import "../chunk-EECT4QBM.js";
import {
  zh_CN_default,
  zh_CN_default2 as zh_CN_default5,
  zh_CN_default3 as zh_CN_default7,
  zh_CN_default4 as zh_CN_default9
} from "../chunk-YTTBVE7U.js";
import "../chunk-F77LJMQC.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-6P4JMQYP.js";
import {
  IImageIoService,
  UniverRenderEnginePlugin,
  default_default,
  mergeLocales
} from "../chunk-2OKSGSKY.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-docs-core/src/preset.ts
function UniverDocsCorePreset(config = {}) {
  const {
    container = "app",
    header,
    footer,
    toolbar,
    ribbonType,
    menu,
    contextMenu,
    disableAutoFocus
  } = config;
  return {
    plugins: [
      UniverNetworkPlugin,
      UniverDocsPlugin,
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        footer,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus
      }],
      UniverDocsUIPlugin,
      UniverFormulaEnginePlugin
    ]
  };
}

// ../presets/packages/preset-docs-core/src/locales/zh-CN.ts
var zh_CN_default10 = Object.assign(
  {},
  zh_CN_default,
  zh_CN_default5,
  zh_CN_default7,
  zh_CN_default9
);

// ../presets/packages/preset-docs-drawing/src/preset.ts
function UniverDocsDrawingPreset(config = {}) {
  const { collaboration = false } = config;
  return {
    plugins: [
      [UniverDrawingPlugin, { override: collaboration ? [[IImageIoService, null]] : [] }],
      UniverDrawingUIPlugin,
      UniverDocsDrawingPlugin,
      UniverDocsDrawingUIPlugin
    ].filter((v) => !!v)
  };
}

// ../presets/packages/preset-docs-drawing/src/locales/zh-CN.ts
var zh_CN_default11 = Object.assign(
  {},
  zh_CN_default2,
  zh_CN_default6
);

// ../presets/packages/preset-docs-hyper-link/src/preset.ts
function UniverDocsHyperLinkPreset() {
  return {
    plugins: [
      UniverDocsHyperLinkPlugin,
      UniverDocsHyperLinkUIPlugin
    ].filter((v) => !!v)
  };
}

// ../presets/packages/preset-docs-hyper-link/src/locales/zh-CN.ts
var zh_CN_default12 = Object.assign(
  {},
  zh_CN_default3
);

// ../presets/packages/preset-docs-thread-comment/src/preset.ts
function UniverDocsThreadCommentPreset(_config = {}) {
  const plugins = [
    UniverThreadCommentUIPlugin,
    UniverDocsThreadCommentUIPlugin
  ];
  return { plugins };
}

// ../presets/packages/preset-docs-thread-comment/src/locales/zh-CN.ts
var zh_CN_default13 = Object.assign(
  {},
  zh_CN_default4,
  zh_CN_default8
);

// src/preset-docs-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(
      zh_CN_default10,
      zh_CN_default11,
      zh_CN_default12,
      zh_CN_default13
    )
  },
  theme: default_default,
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverDocsCorePreset({
      container: "app"
    }),
    UniverDocsDrawingPreset(),
    UniverDocsHyperLinkPreset(),
    UniverDocsThreadCommentPreset()
  ]
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_SIMPLE);
window.univer = univer;
window.univerAPI = univerAPI;
