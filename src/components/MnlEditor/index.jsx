import { useEffect, useState } from "react";
import {
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  Modifier,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { BodyEditor, Container, EditorTitle, HeadEditor, Modal } from "./style";
import { Map } from "immutable";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const MnlEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [selectionState, setSelectionState] = useState();

  const [showModal, setShowModal] = useState(false);
  const [endNoteText, setEndNoteText] = useState("");
  const [endNotesMarkers, setEndNotesMarkers] = useState();

  const blockRenderMap = Map({
    "header-one": {
      element: "h1",
    },
    "header-two": {
      element: "h2",
    },
    unstyled: {
      element: "div",
    },
  });

  const extendedBlockRender = DefaultDraftBlockRenderMap.merge(blockRenderMap);

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

  const handleCreateFootnote = () => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      {
        url: "http://www.zombo.com",
      }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = Modifier.applyEntity(
      contentStateWithEntity,
      selectionState,
      entityKey
    );
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithLink,
    });
    setEditorState(newEditorState);
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    setSelectionState(editorState.getSelection());
    console.log(selectionState);
  }, [editorState]);

  return (
    <Container>
      {showModal && (
        <Modal show={showModal} onClick={(e) => handleCloseModal(e)}>
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
      <HeadEditor>
        <EditorTitle>Editor MNL</EditorTitle>
        <button onClick={onBold}>Bold</button>
        <button onClick={onItalic}>Italic</button>
        <button onClick={onTitle}>Title</button>
        <button onClick={onSubTitle}>SubTitle</button>
        <button onClick={onOl}>OL</button>
        <button onClick={onUl}>UL</button>
        <button onClick={onFootNote}>Make EndNote</button>
      </HeadEditor>
      <BodyEditor>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          blockRenderMap={extendedBlockRender}
        ></Editor>
      </BodyEditor>
    </Container>
  );
};

export default MnlEditor;
