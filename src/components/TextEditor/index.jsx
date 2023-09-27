import { useBooks } from "../../provider/Books";
import { Container } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importe o estilo CSS
import "react-quill/dist/quill.core.css"; // Importe o estilo CSS

const TextEditor = () => {
  const { bookContent, setBookContent } = useBooks();

  const handleChange = (content) => {
    setBookContent(content);
  };

  return (
    <Container>
      <ReactQuill
        value={bookContent}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: ["", "center", "right", "justify"] }],
            ["link", "image"],
          ],
        }}
        style={{ width: "400px", height: "600px" }}
      />

      <div
        className="view ql-editor"
        dangerouslySetInnerHTML={{ __html: bookContent }}
      ></div>
    </Container>
  );
};

export default TextEditor;
