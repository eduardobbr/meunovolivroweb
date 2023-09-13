import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  @media only screen and (min-width: 960px) {
    padding: 50px 0;
  }
`;

export const SectionTitle = styled.h2`
  color: var(--primaryColor);
  font-weight: 800;
  font-size: 31px;
`;

export const Content = styled.div`
  margin-top: 10px;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

export const Icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(
    --${({ $primary }) => ($primary ? `primaryColor` : `quaternaryColor`)}
  );
  margin: 5px;

  svg {
    color: var(--secondaryTextColor);
    width: 50px;
    height: 50px;
  }
`;

export const SubTitle = styled.h3`
  font-family: "Bitter", sans-serif;
  color: var(--mainTextColor);
  font-size: 25px;
  margin: 5px;
`;

export const Paragraph = styled.p`
  color: var(--mainTextColor);
  margin: 5px;
`;
