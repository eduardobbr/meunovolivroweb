import { useBooks } from "../../provider/Books";
import { Card, CardBox, Container, Content, Title } from "./style";

const SizeChooser = () => {
  const { booksSize, setBookSize, bookSize } = useBooks();

  return (
    <Container>
      <Content>
        <Title>Escolha o tamanho do seu livro: </Title>
        <CardBox>
          {booksSize.map((bookSizes) => {
            return (
              <Card
                $size={bookSizes}
                onClick={() => setBookSize(bookSizes)}
                $selected={bookSize === bookSizes}
              >
                <span>{bookSizes}</span>
              </Card>
            );
          })}
        </CardBox>
      </Content>
    </Container>
  );
};

export default SizeChooser;
