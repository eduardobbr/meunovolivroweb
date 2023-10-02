import styled from "styled-components";

export const Content = styled.div`
  width: ${({ $size }) =>
    $size === "16x23" ? "160mm" : $size === "15x21" ? "150mm" : "140mm"};
  height: ${({ $size }) => ($size === "16x23" ? "230mm" : "210mm")};
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

export const Button = styled.button`
  width: 200px;
  height: 100px;
  background-color: var(--primaryColor);
  font-size: 2rem;
  border-radius: 20px;
  border: 1px solid var(--primaryColor);
  color: var(--secondaryTextColor);
  margin-bottom: 20px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 0 0 5px 2px var(--secondaryColor);
  }
`;
