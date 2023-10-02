import styled from "styled-components";

export const Container = styled.div`
  width: 160mm;
  height: 210mm;
  padding: 96px 72px;
  border: 1px solid #ccc;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  margin-bottom: 50px;
  font-size: 11px;

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
    max-width: 80%;
  }

  @media print {
    @page {
      size: 160mm 210mm;
      margin: 20mm 20mm 25mm 20mm;
    }

    height: auto;
    width: auto;
    border: none;
    padding: 0;
  }
`;
