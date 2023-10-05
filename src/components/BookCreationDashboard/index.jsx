import { useState } from "react";
import DataChooser from "../DataChooser";
import FontChooser from "../FontChooser";
import TextEditor from "../TextEditor";
import CoverGenerator from "../CoverGenerator";

const BookCreationDashboard = () => {
  const [step, setStep] = useState(0);
  const steps = [
    <DataChooser />,
    <FontChooser />,
    <TextEditor />,
    <CoverGenerator />,
  ];

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => setStep(0)}>
            <p>Dados do Livro</p>
          </li>
          <li onClick={() => setStep(1)}>
            <p>Design da Obra</p>
          </li>
          <li onClick={() => setStep(2)}>
            <p>Conteúdo</p>
          </li>
          <li onClick={() => setStep(3)}>
            <p>Capa</p>
          </li>
        </ul>
      </nav>

      <div>{steps[step]}</div>
    </div>
  );
};

export default BookCreationDashboard;
