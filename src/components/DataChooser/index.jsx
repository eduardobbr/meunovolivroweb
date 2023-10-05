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
    keywords,
    setKeywords,
    audience,
    setAudience,
    isbn,
    setIsbn,
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
            <p>Subtitulo:</p>

            <input
              type="text"
              value={bookSubTitle}
              onChange={(e) => setBookSubTitle(e.target.value)}
            />
          </BoxContainer>
          <BoxContainer $required>
            <p>Nome do Autor:</p>

            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </BoxContainer>
          <BoxContainer>
            <p>ISBN:</p>

            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </BoxContainer>
          <BoxContainer>
            <p>Público:</p>

            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            />
          </BoxContainer>
          <BoxContainer>
            <p>Palavras-chave:</p>

            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </BoxContainer>
        </DataBox>
      </Content>
    </Container>
  );
};

export default DataChooser;
