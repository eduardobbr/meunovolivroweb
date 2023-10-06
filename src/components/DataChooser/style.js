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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BoxContainer = styled.div`
  color: var(--mainTextColor);
  padding: 2px;
  width: 90%;
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

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
`;

export const SinopseBox = styled.div`
  width: 50%;
  padding-top: 35px;
  color: var(--mainTextColor);
`;
