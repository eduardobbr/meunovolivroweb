import { useBooks } from "../../provider/Books";
import { Container, Content, FontBox, Fonts, Title } from "./style";

const FontChooser = () => {
  const { bookStyle, setBookStyle } = useBooks();

  return (
    <Container>
      <Content>
        <Title>
          Escolha agora qual o <span>design</span> do seu livro:
        </Title>
        <FontBox>
          <Fonts
            onClick={() => setBookStyle("C")}
            $selected={bookStyle === "C"}
            $classic={true}
          >
            <div></div>
            Clássico
          </Fonts>
          <Fonts
            onClick={() => setBookStyle("M")}
            $selected={bookStyle === "M"}
          >
            <div></div>
            Moderno
          </Fonts>
        </FontBox>
      </Content>
    </Container>
  );
};

export default FontChooser;
