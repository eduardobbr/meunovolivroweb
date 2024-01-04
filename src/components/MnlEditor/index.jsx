import { useEffect, useState } from "react";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

const MnlEditor = () => {
  const [editorText, setEditorText] = useState("");
  const [target, setTarget] = useState();

  useEffect(() => {
    console.log(target.value);
    if (target) {
      setEditorText(target.value);
    }
  }, [target]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
      </HeadEditor>
      <BodyEditor
        value={editorText}
        onChange={(e) => setTarget(e.target)}
      ></BodyEditor>
    </Container>
  );
};

export default MnlEditor;
