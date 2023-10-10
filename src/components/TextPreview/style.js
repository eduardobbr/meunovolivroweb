import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px 72px;
  border: 1px solid #ccc;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  margin-bottom: 50px;
  font-size: 11px;
  height: 466px;

  p,
  li,
  h1,
  h2 {
    ${({ $bookStyle }) =>
      $bookStyle === "classic"
        ? "font-family: 'Bitter'"
        : "font-family: 'Work Sans'"};
  }
  h1 {
    font-size: 19px;
    page-break-before: always;
  }
  h2 {
    font-size: 13px;
  }
  p::before {
    content: "       ";
  }
  img {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: var(--primaryColor);
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid var(--primaryColor);
  color: var(--secondaryTextColor);
  margin-bottom: 20px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 0 0 5px 2px var(--secondaryColor);
  }
`;
