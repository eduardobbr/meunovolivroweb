import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const Title = styled.h2``;

export const FontBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const Fonts = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: var(--mainBgColorOpacity);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 300ms;

  ${({ $selected }) =>
    $selected &&
    `box-shadow: 0 0 10px 5px var(--quaternaryColor);
    transform: scale(1.03);
    `}
`;
