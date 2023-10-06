import { useBooks } from "../../provider/Books";
import {
  BoxContainer,
  Container,
  Content,
  ContentBox,
  DataBox,
  SinopseBox,
  Title,
} from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importe o estilo CSS

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
    sinopse,
    setSinopse,
  } = useBooks();

  const handleChange = (content) => {
    setSinopse(content);
  };

  return (
    <Container>
      <Content>
        <Title>
          Preencha os <span>dados</span> do seu livro
        </Title>
        <ContentBox>
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
          <SinopseBox>
            <p>Sinopse:</p>
            <ReactQuill
              className="editor"
              value={sinopse}
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
              style={{
                width: "100%",
                height: "370px",
                fontFamily: "Bitter",
              }}
            />
          </SinopseBox>
        </ContentBox>
      </Content>
    </Container>
  );
};

export default DataChooser;
