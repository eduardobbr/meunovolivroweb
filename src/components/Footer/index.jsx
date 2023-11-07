import { Container, Content, Infos, Social } from "./style";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Content>
        <img
          src="https://meunovolivro.com.br/wp-content/uploads/2022/07/logo-meunovolivro2-1536x245.png"
          alt="Meu Novo Livro Logo Branca"
        />
        <Social>
          <FaFacebook />
          <FaInstagram />
        </Social>
        <Infos>
          <p>
            <FaMapMarkerAlt />
            Av. Vicente Machado, 738, casa 4, Batel, Curitiba-PR
          </p>
          <p>
            <FaRegEnvelope />
            contato@meunovolivro.com.br
          </p>
          <p>
            <FaWhatsapp /> (41) 91234-5678
          </p>
        </Infos>
      </Content>
    </Container>
  );
};

export default Footer;
