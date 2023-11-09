import BookDashCard from "../BookDashCard";
import CreateBookCard from "../CreateBookCard";
import { Container, Content, Title } from "./style";

const BooksDashBox = () => {
  return (
    <Container>
      <Title>Livros</Title>
      <Content>
        <CreateBookCard />
      </Content>
    </Container>
  );
};

export default BooksDashBox;
