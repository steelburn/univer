import {
  CreateHeaderFooterCommand,
  DocSelectionRenderService,
  RichTextEditingMutation
} from "./chunk-7VG27XNI.js";
import {
  FBaseInitialable,
  FUniver
} from "./chunk-5S33VJ76.js";
import {
  ICommandService,
  IRenderManagerService,
  IResourceLoaderService,
  IUniverInstanceService,
  Inject,
  Injector,
  JSONX,
  RESTORE_INSERTED_PARAGRAPH_IDS,
  RedoCommand,
  TextX,
  UndoCommand,
  createParagraphId,
  generateRandomId,
  getRichTextEditPath
} from "./chunk-7BSILHFI.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "./chunk-HECJ2TYE.js";

// ../packages/docs/src/facade/utils.ts
function cloneParagraphStyle(paragraphStyle) {
  return paragraphStyle == null ? paragraphStyle : JSON.parse(JSON.stringify(paragraphStyle));
}
function normalizePlainTextDataStream(dataStream) {
  return dataStream.replace(/\r\n/g, "\r").replace(/\n/g, "\r");
}
function getRemovedLeadingParagraphBreakLength(dataStream, removeLeadingParagraphBreak) {
  const normalized = normalizePlainTextDataStream(dataStream);
  if (removeLeadingParagraphBreak && normalized.length > 1 && normalized.startsWith("\r")) {
    return 1;
  }
  return 0;
}
function buildPlainTextInsertBody(dataStream, options = {}) {
  const normalizedDataStream = normalizePlainTextDataStream(dataStream).slice(
    getRemovedLeadingParagraphBreakLength(dataStream, options.removeLeadingParagraphBreak)
  );
  const body = {
    dataStream: normalizedDataStream,
    customDecorations: [],
    customRanges: [],
    textRuns: []
  };
  const paragraphs = [];
  const existingParagraphIds = /* @__PURE__ */ new Set();
  for (let index = 0; index < normalizedDataStream.length; index++) {
    if (normalizedDataStream[index] === "\r") {
      paragraphs.push({
        startIndex: index,
        paragraphId: createParagraphId(existingParagraphIds),
        ...options.paragraphStyle == null ? {} : { paragraphStyle: cloneParagraphStyle(options.paragraphStyle) }
      });
    }
  }
  if (paragraphs.length > 0) {
    body.paragraphs = paragraphs;
  }
  return body;
}
function replaceBodyRange(range, insertBody, docDataModel, injector) {
  const { startOffset, endOffset, segmentId } = range;
  const textX = new TextX();
  if (startOffset > 0) {
    textX.push({ t: "r" /* RETAIN */, len: startOffset });
  }
  if (endOffset > startOffset) {
    textX.push({ t: "d" /* DELETE */, len: endOffset - startOffset });
  }
  if (insertBody.dataStream.length > 0) {
    textX.push({
      t: "i" /* INSERT */,
      body: insertBody,
      len: insertBody.dataStream.length
    });
  }
  const jsonX = JSONX.getInstance();
  const actions = jsonX.editOp(textX.serialize(), getRichTextEditPath(docDataModel, segmentId));
  const commandService = injector.get(ICommandService);
  const result = commandService.syncExecuteCommand(
    RichTextEditingMutation.id,
    {
      unitId: docDataModel.getUnitId(),
      segmentId,
      actions,
      textRanges: [],
      isEditing: false
    }
  );
  return Boolean((result == null ? void 0 : result.actions) && result.actions.length > 0);
}
function retainBodyRange(range, updateBody, coverType, docDataModel, injector) {
  var _a, _b, _c;
  const { startOffset, endOffset, segmentId } = range;
  const commandService = injector.get(ICommandService);
  if (((_a = updateBody.textRuns) == null ? void 0 : _a.length) && ((_c = (_b = docDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _b.getBody()) == null ? void 0 : _c.textRuns) == null) {
    const jsonX2 = JSONX.getInstance();
    const actions2 = jsonX2.replaceOp(
      [...getRichTextEditPath(docDataModel, segmentId), "textRuns"],
      void 0,
      []
    );
    commandService.syncExecuteCommand(
      RichTextEditingMutation.id,
      {
        unitId: docDataModel.getUnitId(),
        segmentId,
        actions: actions2,
        textRanges: [],
        isEditing: false
      }
    );
  }
  const textX = new TextX();
  if (startOffset > 0) {
    textX.push({ t: "r" /* RETAIN */, len: startOffset });
  }
  textX.push({
    t: "r" /* RETAIN */,
    body: updateBody,
    coverType,
    len: endOffset - startOffset
  });
  const jsonX = JSONX.getInstance();
  const actions = jsonX.editOp(textX.serialize(), getRichTextEditPath(docDataModel, segmentId));
  const result = commandService.syncExecuteCommand(
    RichTextEditingMutation.id,
    {
      unitId: docDataModel.getUnitId(),
      segmentId,
      actions,
      textRanges: [],
      isEditing: false
    }
  );
  return Boolean((result == null ? void 0 : result.actions) && result.actions.length > 0);
}

// ../packages/docs/src/facade/f-document-paragraph.ts
var FDocumentParagraph = class {
  constructor(_document, _paragraphId, _segmentId = "", _injector) {
    __publicField(this, "_document", _document);
    __publicField(this, "_paragraphId", _paragraphId);
    __publicField(this, "_segmentId", _segmentId);
    __publicField(this, "_injector", _injector);
  }
  /**
   * Get the persisted paragraph id.
   * @returns {string} The paragraph id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getId());
   * ```
   */
  getId() {
    return this._paragraphId;
  }
  /**
   * Get the segment id of this paragraph.
   * The main body paragraphs have an empty string segment id.
   * The header and footer paragraphs have a non-empty string segment id.
   * @returns {string} The segment id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getSegmentId());
   * ```
   */
  getSegmentId() {
    return this._segmentId;
  }
  /**
   * Get this paragraph's metadata.
   * @returns {IFDocumentParagraphInfo} The paragraph info.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getInfo());
   * ```
   */
  getInfo() {
    const { paragraphs = [] } = this._document.getBody(this._segmentId);
    const matches = paragraphs.map((paragraph2, paragraphIndex2) => ({ paragraph: paragraph2, paragraphIndex: paragraphIndex2 })).filter(({ paragraph: paragraph2 }) => paragraph2.paragraphId === this._paragraphId);
    if (matches.length === 0) {
      throw new Error(`Document paragraph with id ${this._paragraphId} not found`);
    }
    if (matches.length > 1) {
      throw new Error(`Multiple document paragraphs with id ${this._paragraphId} found`);
    }
    const { paragraph, paragraphIndex } = matches[0];
    const startOffset = paragraphIndex > 0 ? paragraphs[paragraphIndex - 1].startIndex + 1 : 0;
    return {
      paragraph,
      paragraphIndex,
      startOffset,
      endOffset: paragraph.startIndex
    };
  }
  /**
   * Get the current text range occupied by this paragraph.
   * @returns {IFDocumentTextRange} The paragraph text range, excluding the trailing paragraph break.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getRange());
   * ```
   */
  getRange() {
    const { startOffset, endOffset } = this.getInfo();
    return { startOffset, endOffset, segmentId: this._segmentId };
  }
  /**
   * Get this paragraph's plain text.
   * @returns {string} The paragraph text without the trailing paragraph break.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getText());
   * ```
   */
  getText() {
    const { dataStream } = this._document.getBody(this._segmentId);
    const { startOffset, endOffset } = this.getInfo();
    return dataStream.slice(startOffset, endOffset);
  }
  /**
   * Replace this paragraph's plain text.
   * @param {string} text The replacement text. Do not include the paragraph break.
   * @returns {boolean} `true` if the paragraph text was replaced.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * paragraph?.setText('New text');
   * console.log(paragraph?.getText());
   * ```
   */
  setText(text) {
    const { startOffset, endOffset } = this.getInfo();
    return replaceBodyRange(
      {
        startOffset,
        endOffset,
        segmentId: this._segmentId
      },
      buildPlainTextInsertBody(text),
      this._document.getDocumentDataModel(),
      this._injector
    );
  }
  /**
   * Append plain text before this paragraph's trailing paragraph break.
   * @param {string} text The plain text to append.
   * @returns {boolean} `true` if the text was appended.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * paragraph?.appendText(' Appended text');
   * console.log(paragraph?.getText());
   * ```
   */
  appendText(text) {
    const { endOffset } = this.getInfo();
    return this._document.insertText(endOffset, text, this._segmentId);
  }
  /**
   * Apply paragraph style to a paragraph handle or text range.
   * @param {IParagraphStyle} style The Univer paragraph style patch.
   * @returns {boolean} `true` if the style was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * paragraph?.setText('Styled text');
   * paragraph?.setStyle({
   *   textStyle: {
   *     cl: {
   *       rgb: '#FF0000',
   *     },
   *     fs: 14,
   *   },
   *   horizontalAlign: 2,
   * });
   * console.log(paragraph?.getInfo().paragraph.paragraphStyle);
   * ```
   */
  setStyle(style) {
    const { paragraph, startOffset, endOffset } = this.getInfo();
    let result = true;
    if (style.textStyle && startOffset < endOffset) {
      result = retainBodyRange(
        {
          startOffset,
          endOffset,
          segmentId: this._segmentId
        },
        {
          dataStream: "",
          textRuns: [{
            st: 0,
            ed: endOffset - startOffset,
            ts: style.textStyle
          }]
        },
        0 /* COVER */,
        this._document.getDocumentDataModel(),
        this._injector
      );
    }
    const updateBody = {
      dataStream: "",
      paragraphs: [{
        ...paragraph,
        startIndex: 0,
        paragraphStyle: {
          ...paragraph.paragraphStyle,
          ...style
        }
      }]
    };
    this._preserveExplicitParagraphIds(updateBody);
    return retainBodyRange(
      {
        startOffset: endOffset,
        endOffset: endOffset + 1,
        segmentId: this._segmentId
      },
      updateBody,
      1 /* REPLACE */,
      this._document.getDocumentDataModel(),
      this._injector
    ) && result;
  }
  /**
   * Check whether this paragraph is a bullet, ordered, or checklist item.
   * @returns {boolean} `true` if the paragraph has list metadata.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.isListItem());
   * ```
   */
  isListItem() {
    const { paragraph } = this.getInfo();
    return Boolean(paragraph.bullet);
  }
  /**
   * Check whether this paragraph is a task/checklist item.
   * @returns {boolean} `true` if this paragraph is an unchecked or checked task item.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.isTask());
   * ```
   */
  isTask() {
    var _a;
    const { paragraph } = this.getInfo();
    const listType = (_a = paragraph.bullet) == null ? void 0 : _a.listType;
    return listType === "CHECK_LIST" /* CHECK_LIST */ || listType === "CHECK_LIST_CHECKED" /* CHECK_LIST_CHECKED */;
  }
  /**
   * Set the checked state of this task/checklist paragraph.
   * @param {boolean} checked Whether the task item should be checked.
   * @returns {boolean} `true` if the task state was updated, or `false` if this paragraph is not a task item.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   *
   * if (paragraph.isTask()) {
   *   const success = paragraph.setTaskChecked(true);
   *   console.log(success ? 'Task checked' : 'Failed to check task');
   * }
   * ```
   */
  setTaskChecked(checked) {
    if (!this.isTask()) {
      return false;
    }
    const { paragraph, endOffset } = this.getInfo();
    const bullet = paragraph.bullet;
    const updateBody = {
      dataStream: "",
      paragraphs: [{
        ...paragraph,
        startIndex: 0,
        bullet: {
          ...bullet,
          listType: checked ? "CHECK_LIST_CHECKED" /* CHECK_LIST_CHECKED */ : "CHECK_LIST" /* CHECK_LIST */
        }
      }]
    };
    this._preserveExplicitParagraphIds(updateBody);
    return retainBodyRange(
      {
        startOffset: endOffset,
        endOffset: endOffset + 1,
        segmentId: this._segmentId
      },
      updateBody,
      1 /* REPLACE */,
      this._document.getDocumentDataModel(),
      this._injector
    );
  }
  /**
   * Remove this paragraph.
   * @returns {boolean} `true` if the paragraph was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * const success = paragraph?.remove();
   * console.log(success ? 'Paragraph removed' : 'Failed to remove paragraph');
   * ```
   */
  remove() {
    const { startOffset, endOffset } = this.getInfo();
    return this._document.deleteRange({
      startOffset,
      endOffset: endOffset + 1,
      segmentId: this._segmentId
    });
  }
  _preserveExplicitParagraphIds(body) {
    body[RESTORE_INSERTED_PARAGRAPH_IDS] = true;
  }
};

// ../packages/docs/src/facade/f-document.ts
var FDocument = class extends FBaseInitialable {
  constructor(_documentDataModel, _injector, _univerInstanceService, _resourceLoaderService, _commandService) {
    super(_injector);
    __publicField(this, "_documentDataModel", _documentDataModel);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_resourceLoaderService", _resourceLoaderService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "id");
    this.id = this._documentDataModel.getUnitId();
  }
  /**
   * Get the document data model of the document.
   * @param {string} segmentId The segment id used to get the header/footer data model. Defaults to an empty string for the document data model of the document.
   * @returns {DocumentDataModel} The document data model.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getDocumentDataModel());
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * console.log(fDocument.getDocumentDataModel(headerSegmentId));
   * ```
   */
  getDocumentDataModel(segmentId = "") {
    const documentDataModel = this._documentDataModel.getSelfOrHeaderFooterModel(segmentId);
    if (!documentDataModel) {
      throw new Error(segmentId === "" ? "Document data model is not found." : `Document data model is not found in the segment: ${segmentId}`);
    }
    return documentDataModel;
  }
  /**
   * Get the document body or header/footer body by the segment id.
   * The main body has an empty segment id.
   * The header and footer body have their respective segment ids.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {IDocumentBody} The document body.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getBody()); // Get the main body
   *
   * const footerSegmentId = fDocument.ensurePageFooter();
   * console.log(fDocument.getBody(footerSegmentId)); // Get the footer body
   * ```
   */
  getBody(segmentId = "") {
    var _a;
    const body = (_a = this._documentDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _a.getBody();
    if (!body) {
      throw new Error(segmentId === "" ? "Body is not found in the document." : `Body is not found in the segment: ${segmentId}`);
    }
    return body;
  }
  dispose() {
    super.dispose();
  }
  /**
   * Get the document id.
   * @returns {string} The document id.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getId());
   * ```
   */
  getId() {
    return this.id;
  }
  /**
   * Get the document name.
   * @returns {string} The document name.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getName());
   * ```
   */
  getName() {
    return this._documentDataModel.getTitle() || "";
  }
  /**
   * Whether the document is a modern document or not.
   * @returns {boolean} `true` if the document is a modern document, or `false` if it is not.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.isModern());
   * ```
   */
  isModern() {
    return this._documentDataModel.getSnapshot().documentStyle.documentFlavor === 2 /* MODERN */;
  }
  /**
   * Save the document snapshot data, including the document content and resource data, etc.
   * @returns {IDocumentData} The document snapshot data.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const snapshot = fDocument.save();
   * console.log(snapshot);
   * ```
   */
  save() {
    return this._resourceLoaderService.saveUnit(this._documentDataModel.getUnitId());
  }
  /**
   * Undo the last operation in the document.
   * @returns {boolean} `true` if the undo operation was successful, or `false` if it failed.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const success = fDocument.undo();
   * console.log(success);
   * ```
   */
  undo() {
    this._univerInstanceService.focusUnit(this.id);
    return this._commandService.syncExecuteCommand(UndoCommand.id);
  }
  /**
   * Redo the last undone operation in the document.
   * @returns {boolean} `true` if the redo operation was successful, or `false` if it failed.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const success = fDocument.redo();
   * console.log(success);
   * ```
   */
  redo() {
    this._univerInstanceService.focusUnit(this.id);
    return this._commandService.syncExecuteCommand(RedoCommand.id);
  }
  /**
   * Ensure the page header segment exists and return its segment id.
   * @param {number} pageIndex The zero-based page index. Defaults to the first page.
   * @returns {string} The header segment id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const headerSegmentId = fDocument.ensurePageHeader();
   * fDocument.insertText(0, 'Header text', headerSegmentId);
   * ```
   */
  ensurePageHeader(pageIndex = 0) {
    return this._ensureHeaderFooter("header", pageIndex);
  }
  /**
   * Ensure the page footer segment exists and return its segment id.
   * @param {number} pageIndex The zero-based page index. Defaults to the first page.
   * @returns {string} The footer segment id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const footerSegmentId = fDocument.ensurePageFooter();
   * fDocument.insertText(0, 'Footer text', footerSegmentId);
   * ```
   */
  ensurePageFooter(pageIndex = 0) {
    return this._ensureHeaderFooter("footer", pageIndex);
  }
  /**
   * Insert plain text at a document body offset.
   * @param {number} index The zero-based insertion offset.
   * @param {string} text The plain text to insert.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {boolean} `true` if the edit was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * fDocument.insertText(0, 'Hello ');
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * fDocument.insertText(0, 'Header text', headerSegmentId);
   * ```
   */
  insertText(index, text, segmentId = "") {
    return replaceBodyRange(
      {
        startOffset: index,
        endOffset: index,
        segmentId
      },
      buildPlainTextInsertBody(text),
      this._documentDataModel,
      this._injector
    );
  }
  /**
   * Get all paragraphs in the document body or header/footer body by the segment id.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph[]} An array of paragraph facade instances.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraphs = fDocument.getParagraphs();
   * console.log(paragraphs);
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const headerParagraphs = fDocument.getParagraphs(headerSegmentId);
   * console.log(headerParagraphs);
   * ```
   */
  getParagraphs(segmentId = "") {
    const { paragraphs = [] } = this.getBody(segmentId);
    return paragraphs.map((paragraph) => this._createFDocumentParagraph(paragraph.paragraphId, segmentId));
  }
  /**
   * Get a paragraph by its paragraph id and segment id.
   * @param {string} paragraphId The paragraph id.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph | null} The paragraph facade instance, or `null` if the paragraph is not found.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraph('paragraph-01');
   * console.log(paragraph);
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const headerParagraph = fDocument.getParagraph('header-paragraph-01', headerSegmentId);
   * console.log(headerParagraph);
   * ```
   */
  getParagraph(paragraphId, segmentId = "") {
    const { paragraphs = [] } = this.getBody(segmentId);
    const paragraph = paragraphs.find((paragraph2) => paragraph2.paragraphId === paragraphId);
    if (!paragraph) {
      return null;
    }
    return this._createFDocumentParagraph(paragraphId, segmentId);
  }
  /**
   * Find a paragraph by its text content and segment id.
   * @param {string} text The text content to search for.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph | null} The paragraph facade instance, or `null` if the paragraph is not found.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.findParagraphByText('Hello');
   * console.log(paragraph);
   *
   * const footerSegmentId = fDocument.ensurePageFooter();
   * const footerParagraph = fDocument.findParagraphByText('Page', footerSegmentId);
   * console.log(footerParagraph);
   * ```
   */
  findParagraphByText(text, segmentId = "") {
    return this.findParagraphs({ text, segmentId })[0] || null;
  }
  /**
   * Find paragraphs by a query object, which can include text content, paragraph id, and segment id.
   * @param {string | IFDocumentParagraphQuery} query The query object or text content to search for.
   * @returns {FDocumentParagraph[]} An array of paragraph facade instances that match the query.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraphsWithText = fDocument.findParagraphs('Hello');
   * console.log(paragraphsWithText);
   *
   * const paragraphsWithId = fDocument.findParagraphs({ paragraphId: 'paragraph-01' });
   * console.log(paragraphsWithId);
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const paragraphsWithSegment = fDocument.findParagraphs({ segmentId: headerSegmentId });
   * console.log(paragraphsWithSegment);
   * ```
   */
  findParagraphs(query) {
    const normalized = typeof query === "string" ? { text: query } : query;
    const { text, paragraphId, segmentId = "" } = normalized;
    return this.getParagraphs(segmentId).filter((paragraph) => {
      if (paragraphId && paragraph.getId() !== paragraphId) {
        return false;
      }
      if (text && !paragraph.getText().includes(text)) {
        return false;
      }
      return true;
    });
  }
  /**
   * Insert a plain-text paragraph before the paragraph at the given paragraph index.
   * @param {number} index The zero-based paragraph insertion index.
   * @param {string} text The paragraph text. Defaults to an empty paragraph.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph} The inserted paragraph facade instance.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.insertParagraph(0, 'Document title');
   * paragraph.appendText(' suffix');
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const headerParagraph = fDocument.insertParagraph(0, 'Header title', headerSegmentId);
   * headerParagraph.appendText(' suffix');
   * ```
   */
  insertParagraph(index, text = "", segmentId = "") {
    const offset = this._getParagraphInsertOffset(index, segmentId);
    const result = replaceBodyRange(
      {
        startOffset: offset,
        endOffset: offset,
        segmentId
      },
      buildPlainTextInsertBody(`${text}\r`),
      this._documentDataModel,
      this._injector
    );
    if (!result) {
      throw new Error("Failed to insert paragraph.");
    }
    const { paragraphs = [] } = this.getBody(segmentId);
    const paragraph = paragraphs[index];
    if (!paragraph) {
      throw new Error("Failed to insert paragraph.");
    }
    return this._createFDocumentParagraph(paragraph.paragraphId, segmentId);
  }
  /**
   * Append a plain-text paragraph at the end of the body.
   * @param {string} text The paragraph text. Defaults to an empty paragraph.
   * @returns {FDocumentParagraph} The appended paragraph wrapper.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.appendParagraph('Summary');
   * console.log(paragraph.getText());
   *
   * const footerSegmentId = fDocument.ensurePageFooter();
   * const footerParagraph = fDocument.appendParagraph('Confidential', footerSegmentId);
   * console.log(footerParagraph.getText());
   * ```
   */
  appendParagraph(text = "", segmentId = "") {
    const { paragraphs = [] } = this.getBody(segmentId);
    return this.insertParagraph(paragraphs.length, text, segmentId);
  }
  /**
   * Delete a range from the body.
   * @param {IFDocumentTextRange} range The text range to delete.
   * @returns {boolean} `true` if the range was deleted.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * fDocument.deleteRange({ startOffset: 0, endOffset: 5 });
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * fDocument.deleteRange({ startOffset: 0, endOffset: 5, segmentId: headerSegmentId });
   * ```
   */
  deleteRange(range) {
    const normalizedRange = this._normalizeDeleteRange(range);
    if (normalizedRange.startOffset >= normalizedRange.endOffset) {
      return false;
    }
    return replaceBodyRange(
      normalizedRange,
      {
        dataStream: ""
      },
      this._documentDataModel,
      this._injector
    );
  }
  _createFDocumentParagraph(paragraphId, segmentId = "") {
    return this._injector.createInstance(
      FDocumentParagraph,
      this,
      paragraphId,
      segmentId,
      this._injector
    );
  }
  _normalizeDeleteRange(range) {
    const body = this.getBody(range.segmentId);
    const protectedEndOffset = body.dataStream.endsWith("\r\n") ? Math.max(0, body.dataStream.length - 2) : body.dataStream.length;
    const endOffset = Math.min(Math.max(range.endOffset, 0), protectedEndOffset);
    return {
      ...range,
      startOffset: Math.min(Math.max(range.startOffset, 0), endOffset),
      endOffset
    };
  }
  _getParagraphInsertOffset(index, segmentId = "") {
    if (index <= 0) {
      return 0;
    }
    const { dataStream, paragraphs = [] } = this.getBody(segmentId);
    if (paragraphs.length === 0) {
      return Math.max(0, dataStream.length - 1);
    }
    if (index >= paragraphs.length) {
      return paragraphs[paragraphs.length - 1].startIndex + 1;
    }
    return paragraphs[index - 1].startIndex + 1;
  }
  _ensureHeaderFooter(kind, pageIndex) {
    if (this.isModern()) {
      throw new Error("The document is a modern document, header/footer is not supported.");
    }
    const { createType, segmentId: existingSegmentId } = this._getHeaderFooterCreateInfo(kind, pageIndex);
    if (existingSegmentId) {
      return existingSegmentId;
    }
    const segmentId = generateRandomId(6);
    const result = this._commandService.syncExecuteCommand(CreateHeaderFooterCommand.id, {
      unitId: this.getId(),
      segmentId,
      createType
    });
    if (!result) {
      throw new Error(`Failed to create page ${kind}.`);
    }
    return segmentId;
  }
  _getHeaderFooterCreateInfo(kind, pageIndex) {
    var _a, _b, _c, _d, _e, _f;
    const { documentStyle } = this._documentDataModel.getSnapshot();
    const isFirstPage = pageIndex === 0;
    const isEvenPage = (pageIndex + 1) % 2 === 0;
    if (isFirstPage && documentStyle.useFirstPageHeaderFooter === 1 /* TRUE */) {
      return kind === "header" ? {
        createType: 0 /* FIRST_PAGE_HEADER */,
        segmentId: (_a = documentStyle.firstPageHeaderId) != null ? _a : ""
      } : {
        createType: 1 /* FIRST_PAGE_FOOTER */,
        segmentId: (_b = documentStyle.firstPageFooterId) != null ? _b : ""
      };
    }
    if (isEvenPage && documentStyle.evenAndOddHeaders === 1 /* TRUE */) {
      return kind === "header" ? {
        createType: 4 /* EVEN_PAGE_HEADER */,
        segmentId: (_c = documentStyle.evenPageHeaderId) != null ? _c : ""
      } : {
        createType: 5 /* EVEN_PAGE_FOOTER */,
        segmentId: (_d = documentStyle.evenPageFooterId) != null ? _d : ""
      };
    }
    return kind === "header" ? {
      createType: 2 /* DEFAULT_HEADER */,
      segmentId: (_e = documentStyle.defaultHeaderId) != null ? _e : ""
    } : {
      createType: 3 /* DEFAULT_FOOTER */,
      segmentId: (_f = documentStyle.defaultFooterId) != null ? _f : ""
    };
  }
};
FDocument = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, Inject(IResourceLoaderService)),
  __decorateParam(4, ICommandService)
], FDocument);

// ../packages/docs/src/facade/f-univer.ts
var FUniverDocsMixin = class extends FUniver {
  createDocument(data) {
    const instanceService = this._injector.get(IUniverInstanceService);
    const document = instanceService.createUnit(1 /* UNIVER_DOC */, data);
    return this._injector.createInstance(FDocument, document);
  }
  getActiveDocument() {
    const document = this._univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
    if (!document) {
      return null;
    }
    return this._injector.createInstance(FDocument, document);
  }
  getDocument(id) {
    const document = this._univerInstanceService.getUnit(id, 1 /* UNIVER_DOC */);
    if (!document) {
      return null;
    }
    return this._injector.createInstance(FDocument, document);
  }
};
FUniver.extend(FUniverDocsMixin);

// ../packages/docs-ui/src/facade/f-document.ts
var FDocumentUIMixin = class extends FDocument {
  /**
   * Sets the selection to a specified text range in the document.
   * @param startOffset - The starting offset of the selection in the document.
   * @param endOffset - The ending offset of the selection in the document.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * fDocument.setSelection(10, 20);
   * ```
   */
  setSelection(startOffset, endOffset) {
    var _a;
    const renderManagerService = this._injector.get(IRenderManagerService);
    const docSelectionRenderService = (_a = renderManagerService.getRenderUnitById(this.getId())) == null ? void 0 : _a.with(DocSelectionRenderService);
    docSelectionRenderService == null ? void 0 : docSelectionRenderService.removeAllRanges();
    docSelectionRenderService == null ? void 0 : docSelectionRenderService.addDocRanges(
      [
        {
          startOffset,
          endOffset,
          rangeType: "TEXT" /* TEXT */
        }
      ],
      true
    );
  }
};
FDocument.extend(FDocumentUIMixin);
