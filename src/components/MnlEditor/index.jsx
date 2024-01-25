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
  const [bookSection, setBookSection] = useState(new Section());
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [selection, setSelection] = useState();
  const [startSelection, setStartSelection] = useState();
  const [endSelection, setEndSelection] = useState();
  const [lastStartSelection, setLastStartSelection] = useState();
  const [lastEndSelection, setLastEndSelection] = useState();

  const editor = useRef(null);

  const createParagraph = () => {
    const paragraph = new Paragraph();
    const sectionCopy = JSON.parse(JSON.stringify(bookSection));
    sectionCopy.pList.push(paragraph);
    setBookSection(sectionCopy);
    const range = document.createRange();

    let html = [];
    let txt = [];

    sectionCopy.pList.forEach((p) => {
      if (p.markList.some((mark) => mark === "<h1>")) {
        html.push(`<h1>${p.text}</h1>`);
        txt.push(p.text);
      } else {
        html.push(`<p>${p.text}</p>`);
        txt.push(p.text);
      }
    });

    editor.current.innerHTML = html.join("");
    editor.current.innerText = txt.join("\n");

    range.setStart(editor.current.childNodes[currentParagraph], startSelection);
    range.collapse(true);

    const selection = window.getSelection();

    selection.removeAllRanges();
    selection.addRange(range);
  };

  const selectorCheck = () => {
    if (selection) {
      setLastStartSelection(startSelection);
      setLastEndSelection(endSelection);
      if (selection.baseOffset < selection.extentOffset) {
        setStartSelection(selection.baseOffset);
        setEndSelection(selection.focusOffset);
      } else {
        setEndSelection(selection.baseOffset);
        setStartSelection(selection.focusOffset);
      }
    }
  };

  const whichChild = (e) => {
    const parent = e.target;
    const child = window.getSelection();
    setSelection(child);
    selectorCheck();

    parent.childNodes.forEach((node, index) => {
      if (node === child.anchorNode.parentNode) {
        setCurrentParagraph(index);
      }
    });
  };

  const writeContent = (e) => {
    if (e.which <= 90 && e.which >= 48) {
      const comming = e.target.innerText.split("\n");
      const sectionCopy = new Section();
      const range = document.createRange();
      comming.forEach((node) => {
        const paragraph = new Paragraph();
        paragraph.text = node;
        sectionCopy.pList.push(paragraph);
      });
      setBookSection(sectionCopy);

      let html = [];
      let txt = [];

      sectionCopy.pList.forEach((p) => {
        if (p.markList.some((mark) => mark === "<h1>")) {
          html.push(`<h1>${p.text}</h1>`);
          txt.push(p.text);
        } else {
          html.push(`<p>${p.text}</p>`);
          txt.push(p.text);
        }
      });

      editor.current.innerHTML = html.join("");
      editor.current.innerText = txt.join("\n");

      range.setStart(
        editor.current.childNodes[currentParagraph],
        startSelection
      );
      range.collapse(true);

      const selection = window.getSelection();

      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const filterAndAdd = (start, end, text, tag) => {
    const getToChange = text.slice(start, end);
    const insertTag = `<${tag}>${getToChange}</${tag}>`;
    const textChaged =
      text.slice(0, start) + insertTag + text.slice(end, text.length);
    return textChaged;
  };

  const makeItSomething = (tag) => {
    const settedText = filterAndAdd(
      startSelection,
      endSelection,
      bookSection.pList[currentParagraph].text,
      tag
    );

    const sectionCopy = JSON.parse(JSON.stringify(bookSection));

    sectionCopy.pList[currentParagraph].text = settedText;
    const markUp = new Markup(startSelection, endSelection, tag);
    sectionCopy.pList[currentParagraph].markList.push(markUp);

    setBookSection(sectionCopy);

    editor.current.childNodes[currentParagraph].innerHTML = settedText;

    console.log(editor.current.childNodes);
  };

  // useEffect(() => {
  //   console.log(bookSection);
  // });

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
        <button onClick={() => makeItSomething("strong")}>Bold</button>
      </HeadEditor>
      <BodyEditor
        ref={editor}
        contentEditable
        onKeyUp={(e) => {
          e.key === "Enter" ? createParagraph() : writeContent(e);
        }}
        onSelect={(e) => {
          whichChild(e);
        }}
      ></BodyEditor>
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
