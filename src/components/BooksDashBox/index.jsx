import BookDashCard from "../BookDashCard";
import CreateBookCard from "../CreateBookCard";
import { Container, Content, Title } from "./style";
import { useUser } from "../../provider/User";
import { useBooks } from "../../provider/Books";
import { useEffect } from "react";

const BooksDashBox = () => {
  const { user } = useUser();

  const { books, getBooks } = useBooks();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getBooks(user.user_id);
    }
  }, [user]);

  return (
    <Container>
      <Title>Livros</Title>
      <Content>
        {books &&
          books.map((book) => <BookDashCard book={book} key={book.id} />)}
        <CreateBookCard />
      </Content>
    </Container>
  );
};

export default BooksDashBox;
