import { useEffect, useRef, useState } from "react";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

const MnlEditor = () => {
  const [editorText, setEditorText] = useState("");
  const [target, setTarget] = useState();
  const [endCount, setEndCount] = useState();
  const [startCount, setStartCount] = useState();

  const editor = useRef(null);

  const textSelector = (e) => {
    if (e) {
      setStartCount(e.target.selectionStart);
      setEndCount(e.target.selectionEnd);
    }
  };

  useEffect(() => {
    setTarget(editor.current);
  }, [editorText]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
      </HeadEditor>
      <BodyEditor
        ref={editor}
        value={editorText}
        onChange={(e) => setEditorText(e.target.value)}
        onSelect={(e) => textSelector(e)}
        autoComplete="off"
      ></BodyEditor>
      <div>{editorText}</div>
    </Container>
  );
};

export default MnlEditor;
