import { useState } from "react";
import DataChooser from "../DataChooser";
import FontChooser from "../FontChooser";
import TextEditor from "../TextEditor";
import CoverGenerator from "../CoverGenerator";
import {
  Container,
  Content,
  ListItem,
  NavList,
  Prev,
  PrevContBox,
  Prox,
} from "./style";

const BookCreationDashboard = () => {
  const [step, setStep] = useState(0);
  const steps = [
    <DataChooser />,
    <FontChooser />,
    <TextEditor />,
    <CoverGenerator />,
  ];

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
    </Container>
  );
};

export default BookCreationDashboard;
