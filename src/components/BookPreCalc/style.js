import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  > div {
    width: 100%;
  }

  @media only screen and (min-width: 960px) {
    width: 50%;
    padding-right: 30px;
    align-items: flex-start;
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
  margin-bottom: 5px;

  a {
    padding: 3px;
    border: 1px solid var(--mainTextColor);
    transition: 300ms ease-in-out;
    border-radius: 2px;
    width: 175px;
    text-align: center;
    color: var(--mainTextColor);
  }

  a:hover {
    background-color: var(--tertiaryColor);
    border-color: var(--tertiaryColor);
    color: var(--secondaryTextColor);
  }
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
  max-width: 400px;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  align-self: flex-start;
`;
