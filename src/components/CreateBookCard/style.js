import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  border: 3px solid var(--mainTextColor);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--mainTextColor);
  cursor: pointer;

  svg {
    transition: 300ms;
  }

  &:hover {
    svg {
      scale: 1.1;
    }
  }
`;
