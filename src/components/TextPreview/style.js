import styled from "styled-components";

export const Container = styled.div`
  width: 605px;
  padding: 96px 72px;
  border: 1px solid #ccc;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  margin-bottom: 50px;

  h1 {
    font-size: 19px;
    page-break-before: always;
  }
  h2 {
    font-size: 13px;
  }
  p {
    font-size: 11px;
  }
  img {
    max-width: 80%;
  }
`;
