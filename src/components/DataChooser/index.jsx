import { BoxContainer, Container, Content, DataBox, Title } from "./style";

const DataChooser = () => {
  return (
    <Container>
      <Content>
        <Title>Chegou a hora de passar algumas informações importantes:</Title>
        <DataBox>
          <BoxContainer $required>
            <p>Titulo do Livro:</p>
            <input type="text" />
          </BoxContainer>
          <BoxContainer>
            <p>Subtitulo do Livro:</p>

            <input type="text" />
          </BoxContainer>
          <BoxContainer $required>
            <p>Autor do Livro:</p>

            <input type="text" />
          </BoxContainer>
        </DataBox>
      </Content>
    </Container>
  );
};

export default DataChooser;
