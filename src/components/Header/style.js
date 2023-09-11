import { styled } from "styled-components";

export const Container = styled.header`
  background-color: var(--mainBgColor);
  width: 100%;
  padding-top: 15px;
  z-index: 1;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    width: 150px;
  }
`;

export const Menu = styled.nav`
  transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 45px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: var(--mainBgColor);
  z-index: 0;
`;

export const BurgerButton = styled.button`
  border: none;
  background: none;
  width: 2rem;
  height: 2rem;
  padding: 1px;
  svg {
    color: var(--primaryColor);
    width: 100%;
    height: 100%;
  }
`;

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid var(--tertiaryColor);
  a {
    color: var(--primaryColor);
  }
`;
