import { useBooks } from "../../provider/Books";
import { Container, Content, FontBox, Fonts, Title } from "./style";

const FontChooser = () => {
  const { bookStyle, setBookStyle } = useBooks();

  return (
    <Container>
      <Content>
        <Title>Escolha agora qual o estilo do seu livro:</Title>
        <FontBox>
          <Fonts
            onClick={() => setBookStyle("classic")}
            $selected={bookStyle === "classic"}
          >
            Clássico
          </Fonts>
          <Fonts
            onClick={() => setBookStyle("modern")}
            $selected={bookStyle === "modern"}
          >
            Moderno
          </Fonts>
        </FontBox>
      </Content>
    </Container>
  );
};

export default FontChooser;
