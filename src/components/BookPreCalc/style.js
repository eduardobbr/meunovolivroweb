import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  height: 500px;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media only screen and (min-width: 960px) {
    width: 50%;
    padding-right: 30px;
  }
`;

export const Title = styled.h2`
  color: var(--primaryColor);
  font-size: 31px;
`;

export const SubTitle = styled.h3`
  color: var(--mainTextColor);
`;

export const Paragraph = styled.p`
  color: var(--mainTextColor);
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

export const FieldName = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: var(--mainTextColor);
`;

export const SelectItem = styled.select`
  height: 50px;
  font-size: 18px;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
