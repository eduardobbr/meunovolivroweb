import styled from "styled-components";

export const Container = styled.section`
  height: 528px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const Title = styled.h2`
  color: var(--mainTextColor);
  font-weight: 500;
  font-family: "Bitter";

  span {
    color: var(--primaryColor);
  }
`;

export const CoverBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ConfigBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 300px;
`;

export const ConfigFields = styled.div`
  margin: 30px 0;
  width: 100%;

  select {
    width: 100%;
    height: 30px;
  }
`;

export const Button = styled.button`
  margin: 30px 0;
  width: 250px;
  height: 50px;

  background-color: var(--primaryColor);
  border-radius: 20px;
  border: 1px solid var(--primaryColor);
  color: var(--secondaryTextColor);
  margin-bottom: 20px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 0 0 5px 2px var(--secondaryColor);
  }
`;

export const Cover = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  width: 266px;
  height: 426px;
`;

export const BookTitle = styled.h2`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50mm;
  z-index: 500;
  font-size: 2.5rem;

  span {
    display: inline-block;
    width: 80%;
  }
  p {
    font-size: 1.5rem;
    width: 80%;
    display: inline-block;
  }
`;

export const Author = styled.h3`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 10mm;
  z-index: 500;
  font-size: 1.2rem;

  span {
    width: 60%;
  }
`;
