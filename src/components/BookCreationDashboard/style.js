import { styled } from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
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
