import { styled } from "styled-components";

export const Container = styled.footer`
  background-color: var(--tertiaryColor);
  color: var(--secondaryTextColor);
  width: 100%;
  height: 175px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 10px;
  height: 100%;
  margin: 0 auto;

  img {
    width: 150px;
  }
`;

export const Social = styled.div`
  margin: 5px;
  display: flex;
  width: 100px;
  justify-content: space-around;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Infos = styled.div`
  font-size: 1rem;
  font-weight: 300;

  p {
    display: flex;
    align-items: center;
    line-height: 1rem;
    margin: 10px 0;
  }

  svg {
    margin-right: 4px;
    width: 1.2rem;
    height: 1.2rem;
    color: var(--primaryColor);
  }
`;
