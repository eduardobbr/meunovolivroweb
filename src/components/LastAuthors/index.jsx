import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import {
  Author,
  AuthorImg,
  AuthorList,
  AuthorName,
  AuthorSocial,
  Container,
  Title,
} from "./style";

const LastAuthors = () => {
  return (
    <Container>
      <Title>Últimos Autores</Title>

      <AuthorList>
        <Author>
          <AuthorImg
            src="http://localhost:1337/uploads/team_image01_cb03cdcdef.jpeg"
            alt="Imagem do Autor"
          />
          <AuthorName>Mark Galoway</AuthorName>
          <AuthorSocial>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaBehance />
            </Link>
          </AuthorSocial>
        </Author>
        <Author>
          <AuthorImg
            src="http://localhost:1337/uploads/team_image01_cb03cdcdef.jpeg"
            alt="Imagem do Autor"
          />
          <AuthorName>Mark Galoway</AuthorName>
          <AuthorSocial>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaBehance />
            </Link>
          </AuthorSocial>
        </Author>
        <Author>
          <AuthorImg
            src="http://localhost:1337/uploads/team_image01_cb03cdcdef.jpeg"
            alt="Imagem do Autor"
          />
          <AuthorName>Mark Galoway</AuthorName>
          <AuthorSocial>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaBehance />
            </Link>
          </AuthorSocial>
        </Author>
      </AuthorList>
    </Container>
  );
};

export default LastAuthors;
