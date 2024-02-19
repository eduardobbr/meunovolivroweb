import { useBooks } from "../../provider/Books";
import { Container, Content, EditorBox, Title } from "./style";
import TextPreview from "../TextPreview";
import MnlEditor from "../MnlEditor";
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
            <MnlEditor />
          </EditorBox>
        </Content>
      </Container>
    </>
  );
};

export default TextEditor;
