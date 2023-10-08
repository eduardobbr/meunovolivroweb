import { useBooks } from "../../provider/Books";
import { Container, Content, EditorBox, Title } from "./style";
import TextPreview from "../TextPreview";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importe o estilo CSS
import "react-quill/dist/quill.core.css"; // Importe o estilo CSS

const TextEditor = () => {
  const { bookContent, setBookContent } = useBooks();

  const handleChange = (content) => {
    setBookContent(content);
  };

  return (
    <>
      <Container>
        <Title>
          Agora chegou a hora de <span>escrever</span> o seu livro:
        </Title>
        <Content>
          <EditorBox>
            <ReactQuill
              className="editor"
              value={bookContent}
              onChange={handleChange}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  [{ indent: "-1" }, { indent: "+1" }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: ["justify", "", "center", "right"] }],
                  ["link", "image"],
                ],
              }}
              style={{ width: "100%", height: "400px", fontFamily: "Bitter" }}
            />
          </EditorBox>
          <TextPreview bookContent={bookContent}></TextPreview>
        </Content>
      </Container>
    </>
  );
};

export default TextEditor;
