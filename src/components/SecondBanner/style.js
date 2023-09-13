import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--tertiaryColor);
  color: var(--secondaryTextColor);
  padding: 30px;
  margin-bottom: 30px;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const OfferContent = styled.div`
  margin: 20px 0;
  @media only screen and (min-width: 960px) {
    width: 20%;
  }
`;

export const CheckoutContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 960px) {
    width: 40%;
  }
`;

export const Title = styled.h2`
  font-family: "Bitter", sans-serif;
  font-size: 40px;
  font-weight: 800;
`;

export const Weight = styled.span`
  font-weight: 500;
`;

export const Size = styled.span`
  font-weight: 500;
  font-size: 80px;
`;

export const SubTitle = styled.h3`
  font-family: "Bitter", sans-serif;
`;

export const Paragraph = styled.p`
  margin: 30px 0 0 0;
  font-size: 14px;
  border: 1px solid var(--secondaryTextColor);
  border-bottom: 4px solid var(--secondaryTextColor);
  text-transform: uppercase;
  font-weight: 300;
  transition: 300ms ease-in-out;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  padding: 15px 25px;
  a {
    color: var(--secondaryTextColor);
  }
  &:hover {
    background-color: var(--quaternaryColor);
  }
`;

export const ImgContent = styled.div`
  position: relative;
  width: 20%;
`;

export const FirstImg = styled.img`
  position: absolute;
  left: -100px;
  top: -100px;
  height: 350px;
`;

export const SecondImg = styled.img`
  position: absolute;
  left: 0;
  top: -80px;
  height: 310px;
`;
