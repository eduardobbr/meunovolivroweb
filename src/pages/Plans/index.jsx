import Header from "../../components/Header";
import MnlEditor from "../../components/MnlEditor";

import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// Criação de um ícone para o botão de nota de fim
const CustomButton = () => '<span className="octicon octicon-star">N</span>';

// Função para adicionar a nota de fim
function insertEndnote(quill) {
  const range = quill.getSelection();
  let value = prompt("Insira o texto da nota de fim");
  if (value) {
    quill.insertText(range.index, ` [${value}] `, Quill.sources.USER);
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

const EditorDeNotas = () => {
  const [editorHtml, setEditorHtml] = useState("");

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
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
        value={editorHtml}
        onChange={setEditorHtml}
      />
    </div>
  );
};

const Plans = () => {
  return (
    <>
      <Header />
      <EditorDeNotas />
    </>
  );
};

export default Plans;
