import { useEffect, useRef, useState } from "react";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";

class Markup {
  constructor(start, end, tag) {
    this.start = start;
    this.end = end;
    this.tag = tag;
  }
}

class ClassStyles {
  constructor(className) {
    this.className = className;
  }
}

class Section {
  constructor() {
    this.styleList = [];
    this.pList = [];
  }
}

class Paragraph {
  constructor() {
    this.text = "";
    this.markList = [];
  }
}

const MnlEditor = () => {
  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
      </HeadEditor>
      <BodyEditor contentEditable></BodyEditor>
    </Container>
  );
};

export default MnlEditor;

/*
  // const [editorText, setEditorText] = useState("");
  // const [startCount, setStartCount] = useState();
  // const [target, setTarget] = useState();
  // const [endCount, setEndCount] = useState();

  // const editor = useRef(null);

  // const textSelector = (e) => {
  //   if (e) {
  //     console.log(e.getRangeAt(0));
  //     setStartCount(e.baseOffset);
  //     setEndCount(e.extentOffset);
  //   }
  // if (e) {
  //   setStartCount(e.target.selectionStart);
  //   setEndCount(e.target.selectionEnd);
  // }
  // };

  // const filterAndAdd = (start, end, str) => {
  //   return (
  //     editorText.slice(0, start) +
  //     str +
  //     editorText.slice(end, editorText.length)
  //   );
  // };

  // const makeIt = (start, end, tag) => {
  //   if (start !== end) {
  //     const getText = editorText.slice(start, end);
  //     const textBold = `<${tag}>${getText}</${tag}>`;
  //     setEditorText(filterAndAdd(start, end, textBold));
  //     editor.current.innerHTML = filterAndAdd(start, end, textBold);
  //   }
  // };

  // const insertBr = () => {
  //   const text =
  //     editorText.slice(0, startCount) +
  //     "</br>\n" +
  //     editorText.slice(startCount, editorText.length);
  //   setEditorText(text);
  // };

  // useEffect(() => {
  //   setTarget(editor.current);
  //   console.log(editorText);
  // }, [editorText]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
         {<button onClick={() => makeIt(startCount, endCount, "strong")}>
          Negrito
        </button>
        <button onClick={() => makeIt(startCount, endCount, "em")}>
          Italico
        </button>
        <button onClick={() => makeIt(startCount, endCount, "h1")}>
          Título
        </button>} 
      </HeadEditor>
      <BodyEditor
      // ref={editor}
      // // value={editorText}
      // // onChange={(e) => setEditorText(e.target.value)}
      // // onKeyUp={(e) => e.key === "Enter" && insertBr()}
      // // onSelect={(e) => textSelector(e)}
      // // onKeyUp={(e) =>
      // //   e.key === "Enter" ? insertBr() : setEditorText(e.target.innerHTML)
      // // }
      // contentEditable
      // onKeyUp={(e) => setEditorText(e.target.innerHTML)}
      // onMouseUp={() => textSelector(window.getSelection())}
      ></BodyEditor>
       <div dangerouslySetInnerHTML={{ __html: editorText }} /> 
    </Container>
  );
*/
