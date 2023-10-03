import styled from "styled-components";

export const Container = styled.div``;

export const Cover = styled.div`
  position: relative;
  overflow: hidden;
  background-color: grey;

  width: ${({ $size }) => {
    return $size === "16x23" ? "160mm" : $size === "15x21" ? "150mm" : "140mm";
  }};
  height: ${({ $size }) => {
    return $size === "16x23" ? "230mm" : "210mm";
  }};
`;
