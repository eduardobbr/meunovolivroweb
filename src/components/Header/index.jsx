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
import { useEffect, useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMediaQuery } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { useUser } from "../../provider/User";

const Header = () => {
  const [open, setOpen] = useState(false);
  const mobile = useMediaQuery(theme.breakpoints.up("md"));

  const { logged, loginVerify, logout } = useUser();

  useEffect(() => {
    loginVerify();
  });

  return (
    <Container className="header">
      <Content>
        <Logo>
          <Link to={"/"}>
            <img
              src="https://meunovolivro.com.br/wp-content/uploads/2022/07/logo-meunovolivro-1-1536x245.png"
              alt="Logo Meu Novo Livro"
            />
          </Link>
        </Logo>
        <Menu open={open}>
          <MenuList>
            {logged ? (
              <MenuItem>
                <Link to={"/dashboard"}>Criação</Link>
              </MenuItem>
            ) : (
              <MenuItem>
                <Link to={"/login-register"}>Entrar/Cadastre-se</Link>
              </MenuItem>
            )}
            <MenuItem>
              <Link to={"/plans"}>Nossos Planos</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/published"}>Já Publicados</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/blog"}>Blog</Link>
            </MenuItem>
            {logged && (
              <MenuItem>
                <Link to={"/"} onClick={logout}>
                  Sair
                </Link>
              </MenuItem>
            )}
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
