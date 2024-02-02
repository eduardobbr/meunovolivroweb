import { useEffect, useState } from "react";
import {
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";
import { Map } from "immutable";
import { setBlockType } from "draft-js/lib/DraftModifier";

const MnlEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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

  // useEffect(() => {
  //   console.log(editorState._immutable.currentContent.getPlainText());
  // }, [editorState]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor MNL</EditorTitle>
        <button onClick={onBold}>Bold</button>
        <button onClick={onItalic}>Italic</button>
        <button onClick={onTitle}>Title</button>
        <button onClick={onSubTitle}>SubTitle</button>
        <button onClick={onOl}>OL</button>
        <button onClick={onUl}>UL</button>
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
