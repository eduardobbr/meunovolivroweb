import { styled } from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span {
    width: 2px;
    background-color: #000;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  transition: 300ms;
  &:hover p {
    text-decoration: underline;
  }
`;

export const Content = styled.div``;
