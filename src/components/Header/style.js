import { styled } from "styled-components";

export const Container = styled.header`
  background-color: var(--mainBgColor);
  width: 100%;
  height: 50px;
  padding-top: 15px;
  z-index: 1;

  @media only screen and (min-width: 900px) {
    height: 100px;
    padding-top: 25px;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  img {
    width: 150px;
  }

  @media only screen and (min-width: 900px) {
    img {
      width: 300px;
    }
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
  z-index: 1;

  @media only screen and (min-width: 900px) {
    transform: scaleY(1);
    position: relative;
    width: 50%;
    display: flex;
    align-items: center;
    top: auto;
    left: auto;
  }
`;

export const BurgerButton = styled.button`
  border: none;
  background: none;
  width: 2rem;
  height: 2rem;
  padding: 1px;

  svg {
    color: var(--tertiaryColor);
    width: 100%;
    height: 100%;
    transition: 300ms ease-in-out;
  }

  svg:hover {
    color: var(--primaryColor);
  }
`;

export const MenuList = styled.ul`
  @media only screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const MenuItem = styled.li`
  padding: 10px 5px;
  a {
    color: var(--mainTextColor);
    transition: 300ms ease-in-out;

    &:hover {
      color: var(--primaryColor);
    }
  }

  @media only screen and (min-width: 900px) {
    border-bottom: none;
    padding: 0;
  }
`;
