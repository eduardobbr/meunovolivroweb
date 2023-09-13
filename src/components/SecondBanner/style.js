import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--tertiaryColor);
  color: var(--secondaryTextColor);
  padding: 30px;
`;

export const OfferContent = styled.div`
  margin: 20px 0;
`;

export const CheckoutContent = styled.div``;

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

  a {
    font-size: 14px;
    color: var(--secondaryTextColor);
    border: 1px solid var(--secondaryTextColor);
    border-bottom: 4px solid var(--secondaryTextColor);
    text-transform: uppercase;
    padding: 15px 25px;
    font-weight: 300;
    transition: 300ms ease-in-out;
    border-radius: 2px;
    width: 175px;
    text-align: center;
  }

  a:hover {
    background-color: var(--quaternaryColor);
  }
`;
