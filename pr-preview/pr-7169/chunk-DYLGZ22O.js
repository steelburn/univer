import {
  DocSelectionRenderService,
  RichTextEditingMutation
} from "./chunk-M5GVC7ON.js";
import {
  FBase,
  FBaseInitialable,
  FUniver
} from "./chunk-BICC77UV.js";
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
  getRichTextEditPath
} from "./chunk-NMSWDVJS.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "./chunk-HECJ2TYE.js";

// ../packages/docs/src/facade/f-document-element.ts
var FDocumentElement = class extends FBase {
  constructor(_body, _bodyEdit, _info, _injector) {
    super();
    __publicField(this, "_body", _body);
    __publicField(this, "_bodyEdit", _bodyEdit);
    __publicField(this, "_info", _info);
    __publicField(this, "_injector", _injector);
  }
  /**
   * Get the document element type.
   * @returns {DocumentBlockType} The element type, such as `paragraph`, `table`, `blockRange`, or `customBlock`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.getType());
   * ```
   */
  getType() {
    return this._info.type;
  }
  /**
   * Whether this element is a paragraph.
   * @returns {boolean} `true` if this element is a paragraph.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.isParagraph());
   * ```
   */
  isParagraph() {
    return this._info.type === "paragraph" /* PARAGRAPH */;
  }
  /**
   * Whether this element is a table.
   * @returns {boolean} `true` if this element is a table.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.isTable());
   * ```
   */
  isTable() {
    return this._info.type === "table" /* TABLE */;
  }
  /**
   * Whether this element is a block range, such as a callout, quote, or code block.
   * @returns {boolean} `true` if this element is a block range.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.isBlockRange());
   * ```
   */
  isBlockRange() {
    return this._info.type === "blockRange" /* BLOCK_RANGE */;
  }
  /**
   * Whether this element is a custom block.
   * @returns {boolean} `true` if this element is a custom block.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.isCustomBlock());
   * ```
   */
  isCustomBlock() {
    return this._info.type === "customBlock" /* CUSTOM_BLOCK */;
  }
  /**
   * Get the facade key used to resolve this element.
   * @returns {string} The paragraph `paragraphId` or persisted table/block/custom block id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.getKey());
   * ```
   */
  getKey() {
    return this._info.key;
  }
  /**
   * Get the parent body facade that owns this element.
   * @returns {FDocumentBody} The document body facade.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.getParent());
   * ```
   */
  getParent() {
    return this._body;
  }
  /**
   * Get the resolved element info for this wrapper.
   * @returns {IFDocumentElementInfo} The resolved element info, including type, key, position, and priority.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.getResolvedInfo());
   * ```
   */
  getResolvedInfo() {
    return this._info;
  }
  /**
   * Get the next sibling element in the current body order.
   * @returns {FDocumentElement | null} The next sibling wrapper, or `null` when this is the last child.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element?.getNextSibling());
   * ```
   */
  getNextSibling() {
    return this._createSibling(1);
  }
  /**
   * Get the previous sibling element in the current body order.
   * @returns {FDocumentElement | null} The previous sibling wrapper, or `null` when this is the first child.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(1);
   * console.log(element?.getPreviousSibling());
   * ```
   */
  getPreviousSibling() {
    return this._createSibling(-1);
  }
  /**
   * Get the sibling element at a relative offset from this element.
   * @param {number} offset The relative offset from this element. Use `1` for the next sibling, `-1` for the previous sibling, and so on.
   * @returns {FDocumentElement | null} The sibling wrapper at the specified offset, or `null` when the offset is out of range.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * // Get the third sibling after this element
   * const nextThirdSibling = element?.getSibling(3);
   * console.log(nextThirdSibling?.getType());
   * ```
   */
  getSibling(offset) {
    return this._createSibling(offset);
  }
  /**
   * Remove this element from its parent body.
   * @returns {boolean} `true` if the element content was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * const removed = element?.remove();
   * console.log(removed);
   * ```
   */
  remove() {
    if (this.isParagraph()) {
      return this._body.removeParagraph(this.asParagraph());
    }
    if (this.isBlockRange()) {
      return this._body.removeBlockRange(this.asBlockRange());
    }
    if (this.isTable()) {
      return this._body.removeTable(this.asTable());
    }
    return this._body.removeCustomBlock(this.asCustomBlock());
  }
  _createSibling(offset) {
    if (offset === 0) {
      throw new Error("Offset cannot be zero.");
    }
    const index = this._body.getElementIndex(this);
    return this._body.getElement(index + offset);
  }
};

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

// ../packages/docs/src/facade/f-document-paragraph.ts
var FDocumentParagraph = class extends FDocumentElement {
  constructor(body, bodyEdit, info, injector) {
    super(body, bodyEdit, info, injector);
    __publicField(this, "body", body);
    __publicField(this, "bodyEdit", bodyEdit);
    __publicField(this, "info", info);
    __publicField(this, "injector", injector);
    if (this.getType() !== "paragraph" /* PARAGRAPH */) {
      throw new Error(`Element type is not a paragraph: ${this.getType()}`);
    }
  }
  /**
   * Get the persisted paragraph id.
   * @returns {string} The paragraph id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   console.log(paragraph.getParagraphId());
   * }
   * ```
   */
  getParagraphId() {
    return this.getKey();
  }
  /**
   * Get the resolved paragraph info for this wrapper.
   * @returns {IFDocumentResolvedParagraph} The resolved paragraph info, including the paragraph object, its index, and its text range.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   console.log(paragraph.getResolvedParagraphInfo());
   * }
   * ```
   */
  getResolvedParagraphInfo() {
    const { paragraphs = [] } = this._body.getBody();
    const matches = paragraphs.map((paragraph2, paragraphIndex2) => ({ paragraph: paragraph2, paragraphIndex: paragraphIndex2 })).filter(({ paragraph: paragraph2 }) => paragraph2.paragraphId === this.getKey());
    if (matches.length === 0) {
      throw new Error(`Document paragraph with id ${this.getKey()} not found`);
    }
    if (matches.length > 1) {
      throw new Error(`Multiple document paragraphs with id ${this.getKey()} found`);
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
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   const range = paragraph.getRange();
   *   fDocumentBody.setTextStyle(range, { bl: 1 });
   * }
   * ```
   */
  getRange() {
    const { startOffset, endOffset } = this.getResolvedParagraphInfo();
    return { startOffset, endOffset, segmentId: this._body.getSegmentId() };
  }
  /**
   * Get this paragraph's plain text.
   * @returns {string} The paragraph text without the trailing paragraph break.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   console.log(paragraph.getText());
   * }
   * ```
   */
  getText() {
    const { dataStream } = this._body.getBody();
    const { startOffset, endOffset } = this.getResolvedParagraphInfo();
    return dataStream.slice(startOffset, endOffset);
  }
  /**
   * Replace this paragraph's plain text.
   * @param {string} text The replacement text. Do not include the paragraph break.
   * @returns {boolean} `true` if the paragraph text was replaced.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   const success = paragraph.setText('Updated title');
   *   console.log(success ? 'Text updated' : 'Failed to update text');
   * }
   * ```
   */
  setText(text) {
    const { startOffset, endOffset } = this.getResolvedParagraphInfo();
    return this._bodyEdit.replaceRange({ startOffset, endOffset }, buildPlainTextInsertBody(text));
  }
  /**
   * Append plain text before this paragraph's trailing paragraph break.
   * @param {string} text The plain text to append.
   * @returns {boolean} `true` if the text was appended.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   const success = paragraph.appendText(' Appended text');
   *   console.log(success ? 'Text appended' : 'Failed to append text');
   * }
   * ```
   */
  appendText(text) {
    const { endOffset } = this.getResolvedParagraphInfo();
    return this._body.insertText(endOffset, text);
  }
  /**
   * Apply paragraph style to a paragraph handle or text range.
   * @param {IParagraphStyle} style The Univer paragraph style patch.
   * @returns {boolean} `true` if the style was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   paragraph.setStyle({ horizontalAlign: 2 });
   * }
   * ```
   */
  setStyle(style) {
    const { paragraph, endOffset } = this.getResolvedParagraphInfo();
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
    return this._bodyEdit.retainRange(
      { startOffset: endOffset, endOffset: endOffset + 1 },
      updateBody,
      1 /* REPLACE */
    );
  }
  /**
   * Check whether this paragraph is a bullet, ordered, or checklist item.
   * @returns {boolean} `true` if the paragraph has list metadata.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   console.log(paragraph.isListItem() ? 'This is a list item' : 'This is not a list item');
   * }
   * ```
   */
  isListItem() {
    const { paragraph } = this.getResolvedParagraphInfo();
    return Boolean(paragraph.bullet);
  }
  /**
   * Check whether this paragraph is a task/checklist item.
   * @returns {boolean} `true` if this paragraph is an unchecked or checked task item.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   console.log(paragraph.isTask() ? 'This is a task item' : 'This is not a task item');
   * }
   * ```
   */
  isTask() {
    var _a;
    const { paragraph } = this.getResolvedParagraphInfo();
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
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *
   *   if (paragraph.isTask()) {
   *     const success = paragraph.setTaskChecked(true);
   *     console.log(success ? 'Task checked' : 'Failed to check task');
   *   }
   * }
   * ```
   */
  setTaskChecked(checked) {
    if (!this.isTask()) {
      return false;
    }
    const { paragraph, endOffset } = this.getResolvedParagraphInfo();
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
    return this._bodyEdit.retainRange(
      { startOffset: endOffset, endOffset: endOffset + 1 },
      updateBody,
      1 /* REPLACE */
    );
  }
  _preserveExplicitParagraphIds(body) {
    body[RESTORE_INSERTED_PARAGRAPH_IDS] = true;
  }
};
var FDocumentParagraphMixin = class extends FDocumentElement {
  asParagraph() {
    if (this.getType() !== "paragraph" /* PARAGRAPH */) {
      throw new Error(`Element type is not a paragraph: ${this.getType()}`);
    }
    return this._injector.createInstance(FDocumentParagraph, this._body, this._bodyEdit, this.getResolvedInfo(), this._injector);
  }
};
FDocumentElement.extend(FDocumentParagraphMixin);

// ../packages/docs/src/facade/f-document-body.ts
var FDocumentBody = class {
  constructor(_documentDataModel, _injector, _segmentId = "") {
    __publicField(this, "_documentDataModel", _documentDataModel);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_segmentId", _segmentId);
    __publicField(this, "_bodyEdit");
    this._bodyEdit = {
      replaceRange: this._replaceBodyRange.bind(this),
      retainRange: this._retainBodyRange.bind(this)
    };
  }
  /**
   * Get the segment id of this document body facade.
   * The main body has an empty string segment id.
   * The header and footer FDocumentBody instances have their respective segment ids.
   * @returns {string} The segment id of this document body facade.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * console.log(fDocumentBody.getSegmentId());
   * ```
   */
  getSegmentId() {
    return this._segmentId;
  }
  /**
   * Get the underlying document body snapshot.
   * @returns {IDocumentBody} The document body snapshot.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * console.log(fDocumentBody.getBody());
   * ```
   */
  getBody() {
    const body = this._documentDataModel.getSelfOrHeaderFooterModel(this._segmentId).getBody();
    if (!body) {
      throw new Error("The document body is empty");
    }
    return body;
  }
  /**
   * Get a list of top-level child elements in the body.
   * @returns {FDocumentElement[]} The list of top-level document elements.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const elements = fDocumentBody.getElements();
   * console.log(elements);
   * ```
   */
  getElements() {
    const children = this._getChildren();
    return children.map((child) => {
      return this._injector.createInstance(
        FDocumentElement,
        this,
        this._bodyEdit,
        child,
        this._injector
      );
    });
  }
  /**
   * Get a top-level child element by child index.
   * @param {number} index The zero-based child index.
   * @returns {FDocumentElement} The top-level child element wrapper.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(element);
   * ```
   */
  getElement(index) {
    var _a;
    return (_a = this.getElements()[index]) != null ? _a : null;
  }
  /**
   * Get the current child index of an element handle.
   * The index is resolved from the element key, so a paragraph handle keeps pointing
   * to the same paragraph after facade edits insert content before it.
   * @param {FDocumentElement} element The element handle to locate.
   * @returns {number} The current zero-based child index.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * console.log(fDocumentBody.getElementIndex(element));
   * ```
   */
  getElementIndex(element) {
    const { type, key } = element.getResolvedInfo();
    const index = this._getChildren().findIndex((child) => child.type === type && child.key === key);
    if (index < 0) {
      throw new Error("Doc element is stale");
    }
    return index;
  }
  /**
   * Insert plain text at a document body offset.
   * @param {number} index The zero-based insertion offset.
   * @param {string} text The plain text to insert.
   * @returns {boolean} `true` if the edit was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * fDocumentBody.insertText(0, 'Hello ');
   * ```
   */
  insertText(index, text) {
    return this._replaceBodyRange({ startOffset: index, endOffset: index }, buildPlainTextInsertBody(text));
  }
  /**
   * Apply text style to a body range.
   * @param {IFDocumentTextRange} range The range to style.
   * @param {ITextStyle} style The Univer text style patch.
   * @returns {boolean} `true` if the style was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * fDocumentBody.setTextStyle({ startOffset: 0, endOffset: 5 }, { bl: 1 });
   * ```
   */
  setTextStyle(range, style) {
    const len = range.endOffset - range.startOffset;
    const updateBody = {
      dataStream: "",
      textRuns: [{
        st: 0,
        ed: len,
        ts: style
      }]
    };
    return this._retainBodyRange(range, updateBody, 0 /* COVER */);
  }
  /**
   * Insert a plain-text paragraph before the paragraph at the given paragraph index.
   * @param {number} index The zero-based paragraph insertion index.
   * @param {string} text The paragraph text. Defaults to an empty paragraph.
   * @returns {FDocumentParagraph} The inserted paragraph wrapper.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const paragraph = fDocumentBody.insertParagraph(0, 'Document title');
   * paragraph.appendText(' suffix');
   * ```
   */
  insertParagraph(index, text = "") {
    var _a;
    const offset = this._getParagraphInsertOffset(index);
    const result = this._replaceBodyRange({ startOffset: offset, endOffset: offset }, buildPlainTextInsertBody(`${text}\r`));
    if (!result) {
      throw new Error("Failed to insert paragraph.");
    }
    const { paragraphs = [] } = this.getBody();
    const paragraph = paragraphs[index];
    if (!paragraph) {
      throw new Error("Failed to insert paragraph.");
    }
    const info = this._resolveParagraphInfo(paragraph, index, (_a = paragraphs[index - 1]) == null ? void 0 : _a.startIndex);
    return this._injector.createInstance(
      FDocumentParagraph,
      this,
      this._bodyEdit,
      info,
      this._injector
    );
  }
  /**
   * Append a plain-text paragraph at the end of the body.
   * @param {string} text The paragraph text. Defaults to an empty paragraph.
   * @returns {FDocumentParagraph} The appended paragraph wrapper.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const paragraph = fDocumentBody.appendParagraph('Summary');
   * console.log(paragraph.getText());
   * ```
   */
  appendParagraph(text = "") {
    const { paragraphs = [] } = this.getBody();
    return this.insertParagraph(paragraphs.length, text);
  }
  /**
   * Delete a range from the body.
   * @param {IFDocumentTextRange} range The text range to delete.
   * @returns {boolean} `true` if the range was deleted.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * fDocumentBody.deleteRange({ startOffset: 0, endOffset: 5 });
   * ```
   */
  deleteRange(range) {
    return this._replaceBodyRange(range, { dataStream: "" });
  }
  /**
   * Remove a paragraph by paragraph id.
   * @param {FDocumentParagraph} paragraph The paragraph handle to remove.
   * @returns {boolean} `true` if the paragraph was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   const removed = fDocumentBody.removeParagraph(paragraph);
   *   console.log(removed ? 'Paragraph removed' : 'Failed to remove paragraph');
   * }
   * ```
   */
  removeParagraph(paragraph) {
    const { startOffset, endOffset } = paragraph.getResolvedParagraphInfo();
    return this.deleteRange({ startOffset, endOffset: endOffset + 1 });
  }
  /**
   * Remove a callout, quote, or code block range and its content.
   * @param {FDocumentBlockRange} blockRange The block range handle to remove.
   * @returns {boolean} `true` if the block range content was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isBlockRange()) {
   *   const blockRange = element.asBlockRange();
   *   const removed = fDocumentBody.removeBlockRange(blockRange);
   *   console.log(removed ? 'Block range removed' : 'Failed to remove block range');
   * }
   * ```
   */
  removeBlockRange(blockRange) {
    const { startIndex, endIndex } = blockRange.getBlockRange();
    return this.deleteRange({ startOffset: startIndex, endOffset: endIndex + 1 });
  }
  /**
   * Remove a table marker and its content range.
   * @returns {boolean} `true` if the table range was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isTable()) {
   *   const table = element.asTable();
   *   const removed = fDocumentBody.removeTable(table);
   *   console.log(removed ? 'Table removed' : 'Failed to remove table');
   * }
   * ```
   */
  removeTable(table) {
    const { startIndex, endIndex } = table.getTable();
    return this.deleteRange({ startOffset: startIndex, endOffset: endIndex + 1 });
  }
  /**
   * Remove a custom block marker and its placeholder character.
   * @param {FDocumentCustomBlock} customBlock The custom block handle to remove.
   * @returns {boolean} `true` if the custom block placeholder was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isCustomBlock()) {
   *   const customBlock = element.asCustomBlock();
   *   const removed = fDocumentBody.removeCustomBlock(customBlock);
   *   console.log(removed ? 'Custom block removed' : 'Failed to remove custom block');
   * }
   * ```
   */
  removeCustomBlock(customBlock) {
    const { startIndex } = customBlock.getCustomBlock();
    return this.deleteRange({ startOffset: startIndex, endOffset: startIndex + 1 });
  }
  /**
   * Resolve an element key to its current child metadata.
   * @param {FDocumentElement} element The element handle to resolve.
   * @returns {IFDocumentElementInfo} The current child metadata used by the facade.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   * const resolved = fDocumentBody.resolveElement(element);
   * console.log(resolved);
   * ```
   */
  resolveElement(element) {
    const { type, key } = element.getResolvedInfo();
    const child = this._getChildren().find((item) => item.type === type && item.key === key);
    if (!child) {
      throw new Error("Doc element is stale");
    }
    return child;
  }
  _getChildren() {
    var _a;
    const { paragraphs, blockRanges, tables, customBlocks } = this.getBody();
    const children = [];
    if (paragraphs) {
      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i];
        const info = this._resolveParagraphInfo(paragraph, i, (_a = paragraphs[i - 1]) == null ? void 0 : _a.startIndex);
        children.push(info);
      }
    }
    if (blockRanges) {
      for (let i = 0; i < blockRanges.length; i++) {
        const blockRange = blockRanges[i];
        children.push({
          type: "blockRange" /* BLOCK_RANGE */,
          key: blockRange.blockId,
          position: blockRange.startIndex,
          priority: 0
        });
      }
    }
    if (tables) {
      for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        children.push({
          type: "table" /* TABLE */,
          key: table.tableId,
          position: table.startIndex,
          priority: 1
        });
      }
    }
    if (customBlocks) {
      for (let i = 0; i < customBlocks.length; i++) {
        const customBlock = customBlocks[i];
        children.push({
          type: "customBlock" /* CUSTOM_BLOCK */,
          key: customBlock.blockId,
          position: customBlock.startIndex,
          priority: 2
        });
      }
    }
    return children.sort((a, b) => a.position - b.position || a.priority - b.priority);
  }
  _resolveParagraphInfo(paragraph, paragraphIndex, previousParagraphStartIndex) {
    return {
      type: "paragraph" /* PARAGRAPH */,
      key: this._getParagraphId(paragraph, paragraphIndex),
      position: paragraphIndex > 0 ? previousParagraphStartIndex + 1 : 0,
      priority: 3
    };
  }
  _getParagraphId(paragraph, paragraphIndex) {
    if (!paragraph) {
      throw new Error(`Paragraph index ${paragraphIndex} is out of range.`);
    }
    if (!paragraph.paragraphId) {
      throw new Error(`Paragraph at index ${paragraphIndex} is missing paragraphId.`);
    }
    return paragraph.paragraphId;
  }
  _getParagraphInsertOffset(index) {
    if (index <= 0) {
      return 0;
    }
    const { dataStream, paragraphs = [] } = this.getBody();
    if (paragraphs.length === 0) {
      return Math.max(0, dataStream.length - 1);
    }
    if (index >= paragraphs.length) {
      return paragraphs[paragraphs.length - 1].startIndex + 1;
    }
    return paragraphs[index - 1].startIndex + 1;
  }
  _replaceBodyRange(range, insertBody) {
    const { startOffset, endOffset } = range;
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
    return this._executeTextX(textX);
  }
  _retainBodyRange(range, body, coverType) {
    var _a;
    if (((_a = body.textRuns) == null ? void 0 : _a.length) && this.getBody().textRuns == null) {
      this._ensureTextRuns();
    }
    const textX = new TextX();
    if (range.startOffset > 0) {
      textX.push({ t: "r" /* RETAIN */, len: range.startOffset });
    }
    textX.push({
      t: "r" /* RETAIN */,
      body,
      coverType,
      len: range.endOffset - range.startOffset
    });
    return this._executeTextX(textX);
  }
  _ensureTextRuns() {
    const jsonX = JSONX.getInstance();
    const actions = jsonX.replaceOp(
      [...getRichTextEditPath(this._documentDataModel, this._segmentId), "textRuns"],
      void 0,
      []
    );
    const commandService = this._injector.get(ICommandService);
    commandService.syncExecuteCommand(
      RichTextEditingMutation.id,
      {
        unitId: this._documentDataModel.getUnitId(),
        segmentId: this._segmentId,
        actions,
        textRanges: [],
        isEditing: false
      }
    );
  }
  _executeTextX(textX) {
    const jsonX = JSONX.getInstance();
    const actions = jsonX.editOp(textX.serialize(), getRichTextEditPath(this._documentDataModel, this._segmentId));
    const commandService = this._injector.get(ICommandService);
    const result = commandService.syncExecuteCommand(
      RichTextEditingMutation.id,
      {
        unitId: this._documentDataModel.getUnitId(),
        segmentId: this._segmentId,
        actions,
        textRanges: [],
        isEditing: false
      }
    );
    return result !== false;
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
   * @returns {DocumentDataModel} The document data model.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const documentDataModel = fDocument.getDocumentDataModel();
   * console.log(documentDataModel);
   * ```
   */
  getDocumentDataModel() {
    return this._documentDataModel;
  }
  /**
   * Get the document body facade.
   *
   * The returned body facade provides synchronous Google Docs-like element APIs
   * for reading and editing top-level document body elements. Paragraph elements
   * use their persisted `paragraphId` values. Persisted elements, such as tables
   * and custom blocks, use their existing ids.
   *
   * @returns {FDocumentBody} The document body API instance.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * console.log(fDocumentBody.getBody());
   *
   * const element = fDocumentBody.getElement(0);
   * if (element.isParagraph()) {
   *   const paragraph = element.asParagraph();
   *   paragraph.appendText(' updated');
   *   console.log(paragraph.getText());
   * }
   * ```
   */
  getBody() {
    return this._injector.createInstance(FDocumentBody, this._documentDataModel, this._injector);
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
   * const unitId = fDocument.getId();
   * console.log(unitId);
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
   * const name = fDocument.getName();
   * console.log(name);
   * ```
   */
  getName() {
    return this._documentDataModel.getTitle() || "";
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

// ../packages/docs/src/facade/f-document-block-range.ts
var FDocumentBlockRange = class extends FDocumentElement {
  constructor(body, bodyEdit, info, injector) {
    super(body, bodyEdit, info, injector);
    __publicField(this, "body", body);
    __publicField(this, "bodyEdit", bodyEdit);
    __publicField(this, "info", info);
    __publicField(this, "injector", injector);
    if (this.getType() !== "blockRange" /* BLOCK_RANGE */) {
      throw new Error(`Element type is not a block range: ${this.getType()}`);
    }
  }
  /**
   * Get the top-level block range data model.
   * @returns {IDocumentBlockRange} The block range data model.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isBlockRange()) {
   *   const blockRange = element.asBlockRange();
   *   console.log(blockRange.getBlockRange());
   * }
   * ```
   */
  getBlockRange() {
    const { blockRanges = [] } = this._body.getBody();
    const blockRange = blockRanges.find((blockRange2) => blockRange2.blockId === this.getKey());
    if (!blockRange) {
      throw new Error(`Block range not found: ${this.getKey()}`);
    }
    return blockRange;
  }
  /**
   * Get the block range type.
   * @returns {DocumentBlockRangeType} The block type, such as callout, quote, or code.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isBlockRange()) {
   *   const blockRange = element.asBlockRange();
   *   console.log(blockRange.getBlockType());
   * }
   * ```
   */
  getBlockType() {
    const blockRange = this.getBlockRange();
    return blockRange.blockType;
  }
  /**
   * Get the plain text inside this block range.
   * @returns {string} The block range text.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isBlockRange()) {
   *   const blockRange = element.asBlockRange();
   *   console.log(blockRange.getText());
   * }
   * ```
   */
  getText() {
    const { dataStream } = this._body.getBody();
    const { startIndex, endIndex } = this.getBlockRange();
    return dataStream.slice(startIndex, endIndex);
  }
  /**
   * Replace the plain text inside this block range.
   * @param {string} text The replacement text.
   * @returns {boolean} `true` if the block range text was replaced.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isBlockRange()) {
   *   const blockRange = element.asBlockRange();
   *   blockRange.setText('Updated block text');
   *   console.log(blockRange.getText());
   * }
   * ```
   */
  setText(text) {
    const blockRange = this.getBlockRange();
    const { startIndex, endIndex } = blockRange;
    const updateBody = buildPlainTextInsertBody(`${text}\r`);
    updateBody.blockRanges = [{
      ...blockRange,
      startIndex: 0,
      endIndex: text.length
    }];
    return this._bodyEdit.replaceRange({ startOffset: startIndex, endOffset: endIndex + 1 }, updateBody);
  }
  /**
   * Remove this block range wrapper from the body.
   *
   * This currently removes the block range and its content, matching
   * `remove()`.
   *
   * @returns {boolean} `true` if the block range content was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isBlockRange()) {
   *   const blockRange = element.asBlockRange();
   *   const removed = blockRange.unwrap();
   *   console.log(removed ? 'Block range removed' : 'Failed to remove block range');
   * }
   * ```
   */
  unwrap() {
    return this.remove();
  }
};
var FDocumentBlockRangeMixin = class extends FDocumentElement {
  asBlockRange() {
    if (this.getType() !== "blockRange" /* BLOCK_RANGE */) {
      throw new Error(`Element type is not a block range: ${this.getType()}`);
    }
    return this._injector.createInstance(FDocumentBlockRange, this._body, this._bodyEdit, this.getResolvedInfo(), this._injector);
  }
};
FDocumentElement.extend(FDocumentBlockRangeMixin);

// ../packages/docs/src/facade/f-document-custom-block.ts
var FDocumentCustomBlock = class extends FDocumentElement {
  constructor(body, bodyEdit, info, injector) {
    super(body, bodyEdit, info, injector);
    __publicField(this, "body", body);
    __publicField(this, "bodyEdit", bodyEdit);
    __publicField(this, "info", info);
    __publicField(this, "injector", injector);
    if (this.getType() !== "customBlock" /* CUSTOM_BLOCK */) {
      throw new Error(`Element type is not a custom block: ${this.getType()}`);
    }
  }
  /**
   * Get the custom block marker.
   * @returns {ICustomBlock} The custom block marker.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isCustomBlock()) {
   *   const customBlock = element.asCustomBlock();
   *   console.log(customBlock.getCustomBlock());
   * }
   * ```
   */
  getCustomBlock() {
    const { customBlocks = [] } = this._body.getBody();
    const block = customBlocks.find((item) => item.blockId === this.getKey());
    if (!block) {
      throw new Error("Doc custom block is stale");
    }
    return block;
  }
};
var FDocumentCustomBlockMixin = class extends FDocumentElement {
  asCustomBlock() {
    if (this.getType() !== "customBlock" /* CUSTOM_BLOCK */) {
      throw new Error(`Element type is not a custom block: ${this.getType()}`);
    }
    return this._injector.createInstance(FDocumentCustomBlock, this._body, this._bodyEdit, this.getResolvedInfo(), this._injector);
  }
};
FDocumentElement.extend(FDocumentCustomBlockMixin);

// ../packages/docs/src/facade/f-document-table.ts
var FDocumentTable = class extends FDocumentElement {
  constructor(body, bodyEdit, info, injector) {
    super(body, bodyEdit, info, injector);
    __publicField(this, "body", body);
    __publicField(this, "bodyEdit", bodyEdit);
    __publicField(this, "info", info);
    __publicField(this, "injector", injector);
    if (this.getType() !== "table" /* TABLE */) {
      throw new Error(`Element type is not a table: ${this.getType()}`);
    }
  }
  /**
   * Get the table marker.
   * @returns {ICustomTable} The table marker.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const fDocumentBody = fDocument.getBody();
   * const element = fDocumentBody.getElement(0);
   *
   * if (element?.isTable()) {
   *   const table = element.asTable();
   *   console.log(table.getTable());
   * }
   * ```
   */
  getTable() {
    const { tables = [] } = this._body.getBody();
    const table = tables.find((item) => item.tableId === this.getKey());
    if (!table) {
      throw new Error("Doc table is stale");
    }
    return table;
  }
};
var FDocumentTableMixin = class extends FDocumentElement {
  asTable() {
    if (this.getType() !== "table" /* TABLE */) {
      throw new Error(`Element type is not a table: ${this.getType()}`);
    }
    return this._injector.createInstance(FDocumentTable, this._body, this._bodyEdit, this.getResolvedInfo(), this._injector);
  }
};
FDocumentElement.extend(FDocumentTableMixin);

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
