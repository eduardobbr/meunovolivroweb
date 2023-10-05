import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  width: 100%;
  margin: 20px auto;
`;

export const Title = styled.h2`
  color: var(--mainTextColor);
  font-weight: 500;
  font-family: "Bitter";

  span {
    color: var(--primaryColor);
  }
`;

export const DataBox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
`;

export const BoxContainer = styled.div`
  color: var(--mainTextColor);
  padding: 2px;
  width: 30%;
  p {
    ${(props) =>
      props.$required &&
      `&::after{
        content: "*";
      color: #c53030;

      }`}
  }

  input {
    width: 100%;
  }
`;
