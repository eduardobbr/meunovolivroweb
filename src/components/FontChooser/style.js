import styled from "styled-components";

export const Container = styled.section`
  height: 528px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const Title = styled.h2`
  color: var(--mainTextColor);
  font-weight: 500;
  font-family: "Bitter";

  span {
    color: var(--primaryColor);
  }
`;

export const FontBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 450px;
`;

export const Fonts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 300ms;
  ${({ $classic }) =>
    $classic &&
    `font-family: "Bitter", serif;
    `}

  div {
    width: 2rem;
    height: 2rem;
    border: 0.5rem solid var(--mainTextColor);
    border-radius: 50%;
    margin-right: 10px;

    ${({ $selected }) =>
      $selected &&
      `background-color: var(--primaryColor);
    `}
  }
`;
