import { styled } from "styled-components";

export const Container = styled.section``;
export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Title = styled.h2``;
export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const Card = styled.div`
  background-color: var(--mainBgColorOpacity);
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) =>
    $size === "16x23" ? "16mm" : $size === "15x21" ? "15mm" : "14mm"};
  height: ${({ $size }) => ($size === "16x23" ? "23mm" : "21mm")};
  cursor: pointer;
  ${({ $selected }) =>
    $selected &&
    `box-shadow: 0 0 10px 5px var(--quaternaryColor);
    transform: scale(1.03);
    `}
  border-radius: 10px;
  transition: 300ms;

  span {
    font-size: 1rem;
  }
`;
