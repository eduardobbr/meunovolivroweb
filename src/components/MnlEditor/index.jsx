import { useEffect, useRef, useState } from "react";
import {
  CompositeDecorator,
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { BodyEditor, Container, EditorTitle, HeadEditor, Modal } from "./style";
import { Map } from "immutable";
import { v4 as uuidv4 } from "uuid";
import { Link, LinkRedirect, Title } from "./classBlocks";
import { stateFromHTML } from "draft-js-import-html";

const MnlEditor = ({ changer, bookContent }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [selectionState, setSelectionState] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState("");
  const [endNoteText, setEndNoteText] = useState("");
  const [endNotesCounter, setEndNotesCounter] = useState(1);

  //BlockRender
  const blockRenderMap = Map({
    "header-one": {
      element: Title,
    },
    "header-two": {
      element: "h2",
    },
    unstyled: {
      element: "div",
    },
  });

  const extendedBlockRender = DefaultDraftBlockRenderMap.merge(blockRenderMap);

  //Button press functions
  const onBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };
  const onItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };
  const onTitle = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
  };
  const onSubTitle = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-two"));
  };
  const onOl = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };
  const onUl = () => {
    setEditorState(
      RichUtils.toggleBlockType(editorState, "unordered-list-item")
    );
  };
  const onFootNote = () => {
    setShowModal(true);
  };
  const onLink = () => {
    setShowLinkModal(true);
  };

  //Entities find Functions for decorators
  const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "LINK"
      );
    }, callback);
  };

  //Decorators for generate blocks
  const createLinkDecorator = () =>
    new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ]);
  const createLinkRedirectDecorator = () =>
    new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: LinkRedirect,
      },
    ]);

  //FootNotes Creattion
  const handleCreateFootnote = () => {
    const decorator = createLinkDecorator();
    const contentState = editorState.getCurrentContent();

    const firstId = uuidv4();
    const secondId = uuidv4();

    const entityMark = contentState.createEntity("LINK", "MUTABLE", {
      url: `#endnote-${secondId}`,
      id: `endnote-mark-${firstId}`,
    });

    const entityKey = entityMark.getLastCreatedEntityKey();

    const textWithEntity = Modifier.insertText(
      contentState,
      selectionState,
      `[${endNotesCounter}]`,
      null,
      entityKey
    );

    const newEditorState = EditorState.createWithContent(
      textWithEntity,
      decorator
    );

    const newContent = newEditorState.getCurrentContent();

    const blockMap = newContent.getBlockMap();

    const key = blockMap.last().getKey();

    const length = blockMap.last().getLength();

    const selection = new SelectionState({
      anchorKey: key,
      anchorOffset: length,
      focusKey: key,
      focusOffset: length,
    });

    const entityEndNote = contentState.createEntity("LINK", "MUTABLE", {
      url: `#endnote-mark-${firstId}`,
      id: `endnote-${secondId}`,
    });

    const endNoteKey = entityEndNote.getLastCreatedEntityKey();

    const newEndNote = Modifier.insertText(
      newContent,
      selection,
      `\n[${endNotesCounter}]`,
      null,
      endNoteKey
    );

    const endEditorState = EditorState.createWithContent(newEndNote, decorator);

    const newContentWithEndNote = endEditorState.getCurrentContent();

    const newBlockMap = newContentWithEndNote.getBlockMap();

    const newKey = newBlockMap.last().getKey();

    const newLength = newBlockMap.last().getLength();

    const newSelection = new SelectionState({
      anchorKey: newKey,
      anchorOffset: newLength,
      focusKey: newKey,
      focusOffset: newLength,
    });

    const newEndNoteText = Modifier.insertText(
      newContentWithEndNote,
      newSelection,
      ` - ${endNoteText}`
    );

    const newEndEditorState = EditorState.push(endEditorState, newEndNoteText);

    setEditorState(newEndEditorState);
    setEndNotesCounter(endNotesCounter + 1);
    setEndNoteText("");
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      setShowLinkModal(false);
    }
  };

  //Link Creation
  const handleCreateLink = () => {
    const decorator = createLinkRedirectDecorator();
    const contentState = editorState.getCurrentContent();

    const entityLink = contentState.createEntity("LINK", "MUTABLE", {
      url: link,
    });

    const entityKey = entityLink.getLastCreatedEntityKey();

    const newEndNoteText = Modifier.insertText(
      contentState,
      selectionState,
      linkText,
      null,
      entityKey
    );

    const newEditorState = EditorState.createWithContent(
      newEndNoteText,
      decorator
    );

    setEditorState(newEditorState);
    setLink("");
    setLinkText("");
    setShowLinkModal(false);
  };

  const editor = useRef();

  //Get Selection
  useEffect(() => {
    setSelectionState(editorState.getSelection());
  }, [editorState]);

  //Editor load book
  useEffect(() => {
    if (bookContent) {
      const fromHtml = stateFromHTML(bookContent);
      const newEditor = EditorState.createWithContent(fromHtml);
      console.log(fromHtml);
      setEditorState(newEditor);
    }
  }, []);

  const handleOnChange = (ev) => {
    changer(editor.current.editor.innerHTML);
    setEditorState(ev);
  };

  return (
    <Container>
      {showModal && (
        <Modal onClick={(e) => handleCloseModal(e)}>
          <div>
            <h2>Insira o texto da sua nota de rodapé</h2>
            <textarea
              onChange={(e) => setEndNoteText(e.target.value)}
            ></textarea>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
            <button onClick={() => handleCreateFootnote()}>Criar</button>
          </div>
        </Modal>
      )}

      {showLinkModal && (
        <Modal onClick={(e) => handleCloseModal(e)}>
          <div>
            <h2>Insira o texto do link</h2>
            <textarea onChange={(e) => setLinkText(e.target.value)}></textarea>
            <h2>Insira o Link</h2>
            <textarea onChange={(e) => setLink(e.target.value)}></textarea>
            <button onClick={() => setShowLinkModal(false)}>Cancelar</button>
            <button onClick={() => handleCreateLink()}>Criar</button>
          </div>
        </Modal>
      )}
      <HeadEditor>
        <EditorTitle>Editor MNL</EditorTitle>
        <button onClick={onBold}>Bold</button>
        <button onClick={onItalic}>Italic</button>
        <button onClick={onTitle}>Title</button>
        <button onClick={onSubTitle}>SubTitle</button>
        <button onClick={onOl}>OL</button>
        <button onClick={onUl}>UL</button>
        <button onClick={onFootNote}>Make EndNote</button>
        <button onClick={onLink}>Link</button>
      </HeadEditor>
      <BodyEditor>
        <Editor
          editorState={editorState}
          onChange={handleOnChange}
          blockRenderMap={extendedBlockRender}
          classList="editor"
          ref={editor}
        ></Editor>
      </BodyEditor>
    </Container>
  );
};

export default MnlEditor;
