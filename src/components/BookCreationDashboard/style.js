import { styled } from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 50px auto;

  span {
    width: 2px;
    background-color: var(--mainTextColor);
  }
`;

export const ListItem = styled.li`
  color: var(--mainTextColor);
  cursor: pointer;
  transition: 300ms;
  &:hover p {
    text-decoration: underline;
  }
`;

export const Content = styled.div``;

export const Atencao = styled.h2`
  color: red;
  text-align: center;
  width: 100%;
  margin: 20px auto;
  font-size: 20px;
  font-weight: 700;
`;

export const PrevContBox = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ $step }) => $step === 0 && `flex-direction: row-reverse;`}
  width: 100%;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 300ms;
  }
  button:hover {
    text-shadow: 0 0 10px var(--secondaryColor);
  }
`;

export const Prox = styled.button`
  align-self: flex-end;
`;

export const Prev = styled.button`
  align-self: self-start;
`;

export const Save = styled.button`
  cursor: pointer;
  width: 200px;
  height: 50px;
  align-self: center;
  border: none;
  background-color: var(--secondaryColor);
  color: var(--secondaryTextColor);
  border-radius: 5px;
  transition: 300ms;

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;
