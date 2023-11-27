import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  border: 3px solid var(--mainTextColor);
  color: var(--mainTextColor);
  margin: 10px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 7px 7px 0 0;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const Button = styled.button`
  width: 40%;
  height: 1.5rem;
  border-radius: 3px;
  border: none;
  background-color: ${(props) =>
    props.$edit ? "var(--primaryColor)" : "var(--secondaryColor)"};
  color: var(--secondaryTextColor);
  cursor: pointer;
  transition: 600ms;

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const ImgBox = styled.div`
  height: 220px;
  margin-bottom: 10px;
`;
