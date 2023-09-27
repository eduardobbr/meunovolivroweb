import styled from "styled-components";

export const Container = styled.div`
  width: 605px;
  height: 794px;
  padding: 96px 72px;
  border: 1px solid #ccc;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

  h1 {
    font-size: 1.5rem;
    page-break-before: always;
  }
  h2 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
  img {
    max-width: 80%;
  }
`;
