import { styled } from "styled-components";

export const Container = styled.div`
  color: var(--mainTextColor);
  padding: 2px;
  width: 80%;

  div:last-child {
    height: 20px;

    span {
      color: #c53030;
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--secondaryTextColor);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 2px;
  gap: 4px;
  border: 2px solid transparent;
  transition: border ease-in-out 300ms;

  :hover,
  :focus {
    border-color: var(--tertiaryColor);
  }

  ${(props) =>
    props.$error &&
    `
      border-color: #c53030;
    `}

  input {
    background: none;
    align-items: center;
    width: 100%;
    color: var(--tertiaryColor);
    flex: 1;
    padding: 4px;
    outline: none;
    border: none;
    border-radius: 0 4px 4px 0;

    ${(props) =>
      props.required &&
      `::after{
        content: "*";
      border-color: #c53030;

      }`}

    ::placeholder {
      color: var(--mainTextColor);
    }
  }
`;
