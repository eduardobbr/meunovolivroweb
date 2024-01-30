import { useCallback, useEffect, useRef, useState } from "react";
import { BodyEditor, Container, EditorTitle, HeadEditor } from "./style";
import { editRangeIdProperty } from "@syncfusion/ej2-react-documenteditor";
import { CollectionsBookmarkOutlined } from "@material-ui/icons";

class Markup {
  constructor(start, end, tag, endNote) {
    this.start = start;
    this.end = end;
    this.tag = tag;
    this.endNote = endNote;
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
    this.type = "";
  }
}

class Cursor {
  constructor() {
    this.startOffset = 0;
    this.endOffset = 0;
    this.startLine = 0;
    this.endLine = 0;
  }

  set startOff(value) {
    this.startOffset = value;
  }
  set endOff(value) {
    this.endOffset = value;
  }
  set startL(value) {
    this.startLine = value;
  }
  set endL(value) {
    this.endLine = value;
  }
}

const MnlEditor = () => {
  const [bookSection, setBookSection] = useState(new Section());
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [selection, setSelection] = useState();
  const [cursor, setCursor] = useState(new Cursor());

  const editor = useRef(null);

  const setRange = useCallback(() => {
    try {
      const range = document.createRange();
      if (!!editor.current.childNodes[currentParagraph]) {
        range.setStart(editor.current.childNodes[currentParagraph], 0);
        range.setEnd(editor.current.childNodes[currentParagraph], 1);
        range.selectNode(editor.current.childNodes[currentParagraph]);
        range.collapse(true);

        const selection = window.getSelection();

        selection.removeAllRanges();
        selection.addRange(range);
      }
    } catch (e) {
      console.log(editor.current, e);
    }
  }, [currentParagraph, cursor]);

  const renderEditorContent = useCallback(() => {
    editor.current.innerHTML = "";
    if (bookSection.pList.length > 0) {
      bookSection.pList.forEach((p) => {
        if (p.type === "h1") {
          editor.current.append(`<h1>${p.text}</h1>`);
        } else {
          const newP = document.createElement("div");
          newP.innerHTML = p.text;
          editor.current.append(newP);
        }
      });
    }
  }, [bookSection]);

  const createParagraph = (e) => {
    e.preventDefault();
    const paragraph = new Paragraph();
    const sectionCopy = JSON.parse(JSON.stringify(bookSection));
    sectionCopy.pList.push(paragraph);
    setBookSection(sectionCopy);
  };

  const selectorCheck = () => {
    if (selection) {
      if (selection.baseOffset < selection.extentOffset) {
        const newCursor = new Cursor();

        newCursor.startOff = selection.baseOffset;
        newCursor.endOff = selection.focusOffset;

        setCursor(newCursor);
      } else {
        const newCursor = new Cursor();

        newCursor.startOff = selection.focusOffset;
        newCursor.endOff = selection.baseOffset;

        setCursor(newCursor);
      }
    }
  };

  const whichChild = (e) => {
    e.preventDefault();
    const parent = e.target;
    const child = window.getSelection();
    setSelection(child);
    selectorCheck();
    parent.childNodes.forEach((node, index) => {
      if (node === child.anchorNode.parentNode) {
        console.log(node === child.anchorNode.parentNode);
        setCurrentParagraph(index);
      }
    });
  };

  const writeContent = (e) => {
    const comming = e.target.childNodes;
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

  // const makeItSomething = (tag) => {
  //   const settedText = filterAndAdd(
  //     startSelection,
  //     endSelection,
  //     bookSection.pList[currentParagraph].text,
  //     tag
  //   );

  //   const sectionCopy = JSON.parse(JSON.stringify(bookSection));

  //   sectionCopy.pList[currentParagraph].text = settedText;
  //   const markUp = new Markup(startSelection, endSelection, tag);
  //   sectionCopy.pList[currentParagraph].markList.push(markUp);

  //   setBookSection(sectionCopy);

  //   editor.current.childNodes[currentParagraph].innerHTML = settedText;

  // };

  useEffect(() => {
    renderEditorContent();
    setRange();
  }, [bookSection]);

  return (
    <Container>
      <HeadEditor>
        <EditorTitle>Editor Meu Novo Livro</EditorTitle>
        {/* <button onClick={() => makeItSomething("strong")}>Bold</button> */}
      </HeadEditor>
      <BodyEditor
        ref={editor}
        contentEditable
        onKeyUp={(e) => {
          e.key === "Enter" ? createParagraph(e) : writeContent(e);
        }}
        onSelect={(e) => {
          whichChild(e);
        }}
      ></BodyEditor>
    </Container>
  );
};

export default MnlEditor;
