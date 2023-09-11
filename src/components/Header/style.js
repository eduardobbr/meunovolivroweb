import { styled } from "styled-components";

export const Container = styled.header`
  background-color: var(--mainBgColor);
  width: 100%;
  margin-top: 15px;
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

export const Menu = styled.div`
  dispay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(200%)")};
  height: 100vh;
  text-align: right;
  position: absolute;
  top: 3rem;
  right: 2rem;
  transition: transform 0.3s ease-in-out;
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
  a {
    color: var(--primaryColor);
  }
`;
