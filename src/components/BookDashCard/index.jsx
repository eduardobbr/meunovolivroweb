import { useNavigate } from "react-router-dom";
import { useBooks } from "../../provider/Books";
import { useUser } from "../../provider/User";
import { Button, Container, Content, ImgBox, Title } from "./style";

const BookDashCard = ({ book }) => {
  const { bookUpdaterGet, bookGenerate, deleteBook } = useBooks();
  const { token } = useUser();
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <ImgBox>
          <img
            src={`http://127.0.0.1:8000${book.cover}`}
            alt={`Capa do livro ${book.name}`}
          />
        </ImgBox>
        <Title>{book.name}</Title>
        <div>
          <Button onClick={() => bookGenerate(book.id, token, book.name)}>
            Publicar
          </Button>
          <Button
            $edit
            onClick={async () => {
              try {
                await bookUpdaterGet(book.id, token);
                navigate(`/producao/`);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Editar
          </Button>
          <Button onClick={() => deleteBook(book.id, token)}>Excluir</Button>
        </div>
      </Content>
    </Container>
  );
};

export default BookDashCard;
