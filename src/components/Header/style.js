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
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  padding-top: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
`;

export const BurgerButton = styled.button``;
