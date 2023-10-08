import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;

export const EditorBox = styled.div`
  width: 40%;
  height: 542px;
`;

export const Title = styled.h2`
  color: var(--mainTextColor);
  font-weight: 500;
  font-family: "Bitter";

  span {
    color: var(--primaryColor);
  }
`;

export const Content = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;
