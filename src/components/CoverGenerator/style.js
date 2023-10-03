import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const Title = styled.h2`
  margin: 20px 0;
`;

export const CoverBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Cover = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};

  width: ${({ $size }) => {
    return $size === "16x23" ? "160mm" : $size === "15x21" ? "150mm" : "140mm";
  }};
  height: ${({ $size }) => {
    return $size === "16x23" ? "230mm" : "210mm";
  }};
`;

export const BookTitle = styled.h2`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50mm;
  z-index: 500;
  font-size: 2.5rem;

  span {
    display: inline-block;
    width: 80%;
  }
  p {
    font-size: 1.5rem;
    width: 80%;
    display: inline-block;
  }
`;

export const Author = styled.h3`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 10mm;
  z-index: 500;
  font-size: 1.2rem;

  span {
    width: 60%;
  }
`;
