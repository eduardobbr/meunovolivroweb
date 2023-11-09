import { Container } from "./style";
import { PiPlusCircleThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const CreateBookCard = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/producao")}>
      <PiPlusCircleThin size={100} color="var(--mainTextColor)" />
      <p>Adicionar Novo Livro</p>
    </Container>
  );
};

export default CreateBookCard;
