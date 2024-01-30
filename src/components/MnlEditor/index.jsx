import { useEffect, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

const MnlEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  useEffect(() => {
    console.log(editorState._immutable.currentContent.getPlainText());
  }, [editorState]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor MNL</EditorTitle>
        <button onClick={onBold}>Bold</button>
      </HeadEditor>
      <BodyEditor>
        <Editor editorState={editorState} onChange={setEditorState}></Editor>
      </BodyEditor>
    </Container>
  );
};

export default MnlEditor;
