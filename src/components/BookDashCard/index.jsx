import { Button, Container, Content, Title } from "./style";

const BookDashCard = ({ book }) => {
  return (
    <Container>
      <Content>
        <img src={book.cover} alt={`Capa do livro ${book.name}`} />
        <Title>{book.name}</Title>
        <div>
          <Button>Publicar</Button>
          <Button $edit>Editar</Button>
        </div>
      </Content>
    </Container>
  );
};

export default BookDashCard;
