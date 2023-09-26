import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importe o estilo CSS

const TextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (content) => {
    setText(content);
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        }}
      />
    </div>
  );
};

export default TextEditor;
