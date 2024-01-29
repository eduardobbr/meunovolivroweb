import { useCallback, useEffect, useRef, useState } from "react";
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
  const [startSelection, setStartSelection] = useState(0);
  const [endSelection, setEndSelection] = useState();
  const [lastStartSelection, setLastStartSelection] = useState(0);
  const [lastEndSelection, setLastEndSelection] = useState();

  const editor = useRef(null);

  const setRange = useCallback(() => {
    try {
      const range = document.createRange();

      if (editor.current.childNodes[currentParagraph].innerText.length === 0) {
        range.setStart(editor.current.childNodes[0], 0);
      } else {
        range.setStart(editor.current.childNodes[currentParagraph], 1);
      }

      range.collapse(true);

      const selection = window.getSelection();

      selection.removeAllRanges();
      selection.addRange(range);
    } catch (e) {
      console.log(editor.current, e);
    }
  }, [currentParagraph]);

  const renderEditorContent = useCallback(() => {
    editor.current.innerHTML = "";

    if (bookSection.pList.length > 0) {
      bookSection.pList.forEach((p) => {
        if (p.markList.some((mark) => mark === "<h1>")) {
          editor.current.append(`<h1>${p.text}</h1>`);
        } else {
          const newP = document.createElement("p");
          newP.tabIndex = 0;
          newP.innerHTML = p.text;
          editor.current.append(newP);
        }
      });
      console.log(bookSection);
    } else {
      const p = document.createElement("div");
      editor.current.append(p);
    }
  }, [bookSection]);

  const createParagraph = () => {
    const paragraph = new Paragraph();
    const sectionCopy = JSON.parse(JSON.stringify(bookSection));
    sectionCopy.pList.push(paragraph);
    setBookSection(sectionCopy);
    setCurrentParagraph(1);
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
    const comming = e.target.childNodes;
    console.log(comming);
    const sectionCopy = new Section();
    comming.forEach((node) => {
      const paragraph = new Paragraph();
      if (node.nodeType === 3) {
        paragraph.text = node.data;
      } else {
        paragraph.text = node.innerText;
      }
      sectionCopy.pList.push(paragraph);
    });
    setBookSection(sectionCopy);
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

  useEffect(() => {
    renderEditorContent();
    setRange();
  }, [bookSection, renderEditorContent, setRange]);

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
