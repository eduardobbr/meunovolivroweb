import { useEffect, useState } from "react";
import DataChooser from "../DataChooser";
import FontChooser from "../FontChooser";
import TextEditor from "../TextEditor";
import BookCoverUpload from "../BookCoverUpload";
import {
  Container,
  Content,
  ListItem,
  NavList,
  Prev,
  PrevContBox,
  Prox,
  Save,
} from "./style";
import { useBooks } from "../../provider/Books";
import { useUser } from "../../provider/User";
import jwtDecode from "jwt-decode";

const BookCreationDashboard = () => {
  const [step, setStep] = useState(0);
  const steps = [
    <DataChooser />,
    <FontChooser />,
    <TextEditor />,
    <BookCoverUpload />,
  ];

  const { saveOrUpdateBooks, getBooks, setBookName, bookTitle, author } =
    useBooks();

  const { token } = useUser();

  useEffect(() => {
    const user = jwtDecode(token);
    getBooks(user.user_id);
  }, []);

  useEffect(() => {
    setBookName(`${bookTitle} - ${author}`);
  }, [bookTitle, author]);

  const handleSave = () => {
    setBookName(`${bookTitle} - ${author}`);
    saveOrUpdateBooks(token);
  };

  return (
    <Container>
      <nav>
        <NavList>
          <ListItem onClick={() => setStep(0)}>
            <p>Dados do Livro</p>
          </ListItem>
          <span />
          <ListItem onClick={() => setStep(1)}>
            <p>Design da Obra</p>
          </ListItem>
          <span />
          <ListItem onClick={() => setStep(2)}>
            <p>Conteúdo</p>
          </ListItem>
          <span />
          <ListItem onClick={() => setStep(3)}>
            <p>Capa</p>
          </ListItem>
        </NavList>
      </nav>

      <Content>{steps[step]}</Content>
      <PrevContBox $step={step}>
        {step > 0 && <Prev onClick={() => setStep(step - 1)}>Voltar</Prev>}

        {step < 3 && <Prox onClick={() => setStep(step + 1)}>Próximo</Prox>}
      </PrevContBox>
      <Save onClick={handleSave}>Salvar Livro</Save>
    </Container>
  );
};

export default BookCreationDashboard;
