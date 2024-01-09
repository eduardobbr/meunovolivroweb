import { useEffect, useRef, useState } from "react";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

const MnlEditor = () => {
  const [editorText, setEditorText] = useState("");
  const [startCount, setStartCount] = useState();
  const [target, setTarget] = useState();
  const [endCount, setEndCount] = useState();

  const editor = useRef(null);

  const textSelector = (e) => {
    if (e) {
      setStartCount(e.target.selectionStart);
      setEndCount(e.target.selectionEnd);
    }
  };

  const filterAndAdd = (start, end, str) => {
    return (
      editorText.slice(0, start) +
      str +
      editorText.slice(end, editorText.length)
    );
  };

  const makeItBold = (start, end) => {
    if (start !== end) {
      const getText = editorText.slice(start, end);
      const textBold = `<b>${getText}</b>`;
      setEditorText(filterAndAdd(start, end, textBold));
    }
    // document.execCommand("bold");
  };

  const makeItItalic = (start, end) => {
    if (start !== end) {
      const getText = editorText.slice(start, end);
      const textBold = `<i>${getText}</i>`;
      setEditorText(filterAndAdd(start, end, textBold));
    }
    // document.execCommand("italic");
  };

  useEffect(() => {
    setTarget(editor.current);
  }, [editorText]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
        <button onClick={() => makeItBold(startCount, endCount)}>Bold</button>
        <button onClick={() => makeItItalic(startCount, endCount)}>
          Italic
        </button>
      </HeadEditor>
      <BodyEditor
        ref={editor}
        value={editorText}
        onChange={(e) => setEditorText(e.target.value)}
        onSelect={(e) => textSelector(e)}
      ></BodyEditor>
      <div dangerouslySetInnerHTML={{ __html: editorText }} />
    </Container>
  );
};

export default MnlEditor;
