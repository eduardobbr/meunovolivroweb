import { styled } from "styled-components";

export const Container = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--tertiaryColor);
  color: var(--secondaryTextColor);
  padding: 10px;
`;

export const Title = styled.h2`
  margin: 10px 0;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 2rem;
`;

export const AuthorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Author = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

export const AuthorImg = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const AuthorName = styled.h3`
  margin: 10px 0;
  font-weight: 400;
`;

export const AuthorSocial = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  a {
    color: var(--secondaryTextColor);

    svg {
      font-size: 1.5rem;
    }
  }
`;
