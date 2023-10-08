import { styled } from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
  height: 700px;
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
