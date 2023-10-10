import styled from "styled-components";

export const Printer = styled.div`
  @media print {
    @page {
      size: 1600px 2560px;
      margin: 0;
    }
    display: block !important;
    width: 1600px;
    height: 2560px;
  }

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
  .ql-editor {
    padding: 200px;
  }
`;

export const CoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1600px;
  height: 2560px;

  .makeLarge {
    scale: 6;
  }
`;
