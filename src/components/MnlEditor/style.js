import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid grey;
  max-width: 1200px;
  padding: 10px;
`;

export const HeadEditor = styled.div`
  border-bottom: 1px solid grey;
  min-height: 48px;
`;

export const EditorTitle = styled.h3`
  text-align: center;
  color: grey;
`;

export const BodyEditor = styled.textarea`
  height: 500px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
`;
