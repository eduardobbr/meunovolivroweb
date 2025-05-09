import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid grey;
  max-width: 1200px;
  padding: 10px;
  height: inherit;
`;

export const HeadEditor = styled.div`
  border-bottom: 1px solid grey;
  min-height: 48px;
`;

export const EditorTitle = styled.h3`
  text-align: center;
  color: grey;
`;

export const BodyEditor = styled.div`
  margin-top: 10px;
  height: 410px;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  resize: none;
  display: flex;
  justify-content: center;
  overflow-y: scroll;

  .DraftEditor-root {
    width: 100%;
  }
`;

export const Title = styled.h1``;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--mainBgColorOpacity);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > div {
    width: 50vw;
    height: 50vh;
    background-color: var(--mainBgColor);
  }
`;
