import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  padding: 20px 0;
`;

export const Title = styled.h2`
  margin: 20px 0;
  color: var(--mainTextColor);
  font-weight: 800;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Product = styled.li``;

export const ProductImg = styled.img`
  width: 200px;
`;

export const ProductCategory = styled.h4`
  font-weight: 400;
  font-family: "Bitter";
  color: var(--mainTextColor);
`;

export const ProductTitle = styled.h3`
  color: var(--primaryColor);
  margin: 5px 0;
  font-weight: 800;
`;

export const ProductValue = styled.h3`
  font-family: "Bitter";
  color: var(--mainTextColor);
  font-weight: 900;
`;
