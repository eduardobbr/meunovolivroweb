import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useBooks } from "../../provider/Books";
import { v4 as uuidv4 } from "uuid";

// Criação de um ícone para o botão de nota de fim
const CustomButton = () => '<span className="octicon octicon-star">N</span>';

// Função para adicionar a nota de fim
function insertEndnote(quill) {
  const range = quill.getSelection();
  const firstId = uuidv4();
  const secondId = uuidv4();
  let mark = prompt("Insira o marcador");
  let value = prompt("Insira o texto da nota de fim");
  if (value) {
    const markLink = `<a id='endnoteMark-${firstId}' href='#endnote-${secondId}'>[${mark}]</a>`;
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

const MnlEditor = () => {
  const { bookContent, setBookContent } = useBooks();

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { align: ["justify", "", "center", "right"] },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["endnote"], // Adicionar botão personalizado na barra de ferramentas
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
