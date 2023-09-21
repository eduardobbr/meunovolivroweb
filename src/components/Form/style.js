import { styled } from "styled-components";

export const Container = styled.form`
  width: 300px;
  height: fit-content;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;

  ${(props) => `
    background: ${
      props.$isTransparent ? "rgb(0, 0, 0, 0)" : "var(--primaryColor)"
    };
    border: ${props.$isTransparent ? "1px solid rgb(220,220,220)" : "none"};
  `}
`;
