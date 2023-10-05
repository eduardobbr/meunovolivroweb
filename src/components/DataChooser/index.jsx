import { useBooks } from "../../provider/Books";
import { BoxContainer, Container, Content, DataBox, Title } from "./style";

const DataChooser = () => {
  const {
    author,
    setAuthor,
    bookSubTitle,
    setBookSubTitle,
    bookTitle,
    setBookTitle,
  } = useBooks();

  return (
    <Container>
      <Content>
        <Title>
          Preencha os <span>dados</span> do seu livro
        </Title>
        <DataBox>
          <BoxContainer $required>
            <p>Titulo do Livro:</p>
            <input
              type="text"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          </BoxContainer>
          <BoxContainer>
            <p>Subtitulo do Livro:</p>

            <input
              type="text"
              value={bookSubTitle}
              onChange={(e) => setBookSubTitle(e.target.value)}
            />
          </BoxContainer>
          <BoxContainer $required>
            <p>Autor do Livro:</p>

            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </BoxContainer>
        </DataBox>
      </Content>
    </Container>
  );
};

export default DataChooser;
