import { useEffect, useRef, useState } from "react";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

const MnlEditor = () => {
  const [editorText, setEditorText] = useState("");
  const [target, setTarget] = useState();
  const [textRows, setTextRows] = useState([]);
  const [lineCount, setLineCount] = useState(1);

  const editor = useRef(null);

  const filterText = (text) => {
    if (textRows.length > 0) {
      text.split("\\n");
      return setTextRows([...textRows, { lineCount }]);
    }
  };

  const mouse = (e) => {
    if (e) {
      console.log("start", e.target.selectionStart);
      console.log("end", e.target.selectionEnd);
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
        onSelect={(e) => mouse(e)}
        autoComplete="off"
      ></BodyEditor>
      <div>{editorText}</div>
    </Container>
  );
};

export default MnlEditor;
