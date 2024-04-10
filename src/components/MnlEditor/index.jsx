import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import { useBooks } from "../../provider/Books";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

// Criação de um ícone para o botão de nota de fim
const CustomButton = () => '<span class="ql-endnote">N¹</span>';

// Função para adicionar a nota de fim
function insertEndnote(quill) {
  const range = quill.getSelection();
  const firstId = uuidv4();
  const secondId = uuidv4();
  let mark = prompt("Insira o marcador");
  let value = prompt("Insira o texto da nota de fim");
  if (value) {
    const markLink = `<a class="endNoteLine" id='endnoteMark-${firstId}' href='#endnote-${secondId}'>[${mark}]</a>`;
    quill.insertEmbed(range.index, "custom", markLink, Quill.sources.USER);
    const endNoteLink = `<p><span>[${mark}] - ${value}</span> <a id='endnote-${secondId}' href='#endnoteMark-${firstId}'>voltar</a></p>`;
    quill.insertEmbed(
      quill.getLength() - 1,
      "custom",
      endNoteLink,
      Quill.sources.USER
    );
  }
}

// Registro do módulo personalizado
function registerCustomButton() {
  const CustomBlotButton = function () {
    const button = document.createElement("button");
    button.className = "ql-endnote";
    button.innerHTML = CustomButton();
    button.onclick = () => insertEndnote(this);
    return button;
  };

  Quill.register("modules/endNoteButton", function (quill, options) {
    const toolbar = quill.getModule("toolbar");
    toolbar.addHandler("endnote", () => insertEndnote(quill));
    toolbar.container.appendChild(CustomBlotButton.call(quill));
  });
}

registerCustomButton();

const CustomBlot = Quill.import("blots/embed");

class CustomBlotFormat extends CustomBlot {
  static create(value) {
    let node = super.create();
    node.contentEditable = true;
    if (typeof value === "object") {
      node.innerHTML = value.content;
    } else {
      node.innerHTML = value;
    }
    return node;
  }

  static value(node) {
    return {
      content: node.innerHTML,
    };
  }
}
CustomBlotFormat.blotName = "custom";
CustomBlotFormat.tagName = "span";

Quill.register(CustomBlotFormat);

const Font = ReactQuill.Quill.import("formats/font"); // <<<< ReactQuill exports it
Font.whitelist = ["sans", "serif", "monospace"]; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);

const Size = Quill.import("attributors/style/size");
Size.whitelist = ["1rem", "1.5rem", "2rem"];
Quill.register(Size, true);

const MnlEditor = () => {
  const { bookContent, setBookContent } = useBooks();

  useEffect(() => {
    const test = document.querySelectorAll(".ql-picker-item");
    test.forEach((node) => {
      if (node.dataset.value === "sans") {
        node.classList.add("ql-font-sans", "beforeWorkSans");
      }
      if (node.dataset.value === "serif") {
        node.classList.add("ql-font-serif", "beforeBitter");
      }
      if (node.dataset.value === "monospace") {
        node.classList.add("ql-font-monospace", "beforeCursive");
      }
      if (node.dataset.value === "1rem") {
        node.classList.add("ql-fontSize-1rem", "before1rem");
      }
      if (node.dataset.value === "1.5rem") {
        node.classList.add("ql-fontSize-1.5rem", "before1.5rem");
      }
      if (node.dataset.value === "monospace") {
        node.classList.add("ql-fontSize-2rem", "before2rem");
      }
    });
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        [{ font: ["sans", "serif", "monospace"] }],
        [{ size: ["1rem", "1.5rem", "2rem"] }],
        [("bold", "italic", "underline", "strike", "blockquote")],
        [
          { list: "ordered" },
          { list: "bullet" },
          { align: ["justify", "", "center", "right"] },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
      ],
      handlers: {
        endnote: insertEndnote,
      },
    },
    endNoteButton: true, // Ativando o módulo personalizado
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={bookContent}
        onChange={setBookContent}
        style={{ height: "450px" }}
      />
    </div>
  );
};

export default MnlEditor;
