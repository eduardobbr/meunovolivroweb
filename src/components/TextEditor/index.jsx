import { useBooks } from "../../provider/Books";
import { Container, Content, EditorBox, Title } from "./style";
import MnlEditor from "../MnlEditor";

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
            <MnlEditor changer={handleChange} bookContent={bookContent} />
          </EditorBox>
        </Content>
      </Container>
    </>
  );
};

export default TextEditor;
