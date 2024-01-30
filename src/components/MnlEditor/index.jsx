import { useEffect, useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

const MnlEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor MNL</EditorTitle>
      </HeadEditor>
      <BodyEditor>
        <Editor editorState={editorState} onChange={setEditorState}></Editor>
      </BodyEditor>
    </Container>
  );
};

export default MnlEditor;
