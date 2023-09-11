import { Link } from "react-router-dom";
import {
  BurgerButton,
  Container,
  Content,
  Logo,
  Menu,
  MenuItem,
  MenuList,
} from "./style";
import { useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Hidden } from "@material-ui/core";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Content>
        <Logo>
          <Link to={"/"}>
            <img
              src="http://localhost:1337/uploads/logo_meunovolivro_1_768x122_e899097e44.png"
              alt="Logo Meu Novo Livro"
            />
          </Link>
        </Logo>
        <Menu open={open}>
          <MenuList>
            <MenuItem>
              <Link to={"/login"}>Entrar/Cadastre-se</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/plans"}>Nossos Planos</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/published"}>Já Publicados</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/blog"}>Blog</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Hidden mdUp>
          <BurgerButton onClick={() => setOpen(!open)}>
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
        </Hidden>
      </Content>
    </Container>
  );
};

export default Header;
