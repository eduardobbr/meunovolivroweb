import { Link } from "react-router-dom";
import { BurgerButton, Container, Content, Logo, Menu } from "./style";
import { useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <Container>
      <Content>
        <Logo>
          <Link to={"/"}>
            <img
              src="http://localhost:1337/uploads/logo_meunovolivro_1_768x122_fa9d1a0995.png"
              alt="Logo Meu Novo Livro"
            />
          </Link>
        </Logo>
        <Menu open={open}>
          <ul>
            <li>
              <Link to={"/login"}>Entrar/Cadastre-se</Link>
            </li>
            <li>
              <Link to={"/plans"}>Nossos Planos</Link>
            </li>
            <li>
              <Link to={"/published"}>Já Publicados</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </Menu>
        <BurgerButton>
          {open ? (
            <>
              <AiOutlineCloseCircle />
            </>
          ) : (
            <>
              <GiBookshelf />
            </>
          )}
        </BurgerButton>
      </Content>
    </Container>
  );
};

export default Header;
