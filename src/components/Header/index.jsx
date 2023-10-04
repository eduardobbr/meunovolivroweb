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
import { useMediaQuery } from "@material-ui/core";
import { theme } from "../../styles/theme";

const Header = () => {
  const [open, setOpen] = useState(false);
  const mobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container className="header">
      <Content>
        <Logo>
          <Link to={"/"}>
            <img
              src="http://localhost:1337/uploads/logo_meunovolivro_1_1536x245_55a7dd3782.png"
              alt="Logo Meu Novo Livro"
            />
          </Link>
        </Logo>
        <Menu open={open}>
          <MenuList>
            <MenuItem>
              <Link to={"/login-register"}>Entrar/Cadastre-se</Link>
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

        {mobile ? (
          <></>
        ) : (
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
        )}
      </Content>
    </Container>
  );
};

export default Header;
