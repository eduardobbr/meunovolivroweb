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
      setStartCount(e.baseOffset);
      setEndCount(e.extentOffset);
    }
  };

  const filterAndAdd = (start, end, str) => {
    return (
      editorText.slice(0, start) +
      str +
      editorText.slice(end, editorText.length)
    );
  };

  const makeIt = (start, end, tag) => {
    if (start !== end) {
      const getText = editorText.slice(start, end);
      const textBold = `<${tag}>${getText}</${tag}>`;
      setEditorText(filterAndAdd(start, end, textBold));
      editor.current.innerHTML = filterAndAdd(start, end, textBold);
    }
  };

  useEffect(() => {
    setTarget(editor.current);
    console.log(editorText);
  }, [editorText]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
        <button onClick={() => makeIt(startCount, endCount, "strong")}>
          Negrito
        </button>
        <button onClick={() => makeIt(startCount, endCount, "em")}>
          Italico
        </button>
      </HeadEditor>
      <BodyEditor
        ref={editor}
        contentEditable
        // onChange={(e) => setEditorText(e.target.value)}
        onKeyUp={(e) => setEditorText(e.target.innerHTML)}
        onMouseUp={(e) => textSelector(document.getSelection())}
        // onSelect={(e) => textSelector(e)}
      ></BodyEditor>
      <div dangerouslySetInnerHTML={{ __html: editorText }} />
    </Container>
  );
};

export default MnlEditor;
