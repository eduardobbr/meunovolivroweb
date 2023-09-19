import { styled } from "styled-components";

export const Container = styled.form`
  width: 300px;
  height: fit-content;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  ${(props) => `
    background: ${
      props.$isTransparent ? "rgb(0, 0, 0, 0)" : "var(--primaryColor)"
    };
  `}
`;
