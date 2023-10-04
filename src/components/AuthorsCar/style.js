import { styled } from "styled-components";

export const Container = styled.section`
  background: url("http://localhost:1337/uploads/testi_bg_86015e888c.jpg"),
    var(--mainBgColor);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--secondBgColorOpacity);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 80%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .carousel-root {
    height: 90%;

    .carousel {
      height: 100%;
      display: flex;
    }
  }
`;

export const Title = styled.h2`
  color: var(--secondaryTextColor);
  font-weight: 800;
  font-size: 31px;
  padding: 15px 0;
`;

export const Balloon = styled.div`
  background-color: var(--mainBgColor);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  padding: 10px;
  text-align: left;
  color: var(--mainTextColor);
`;

export const BalloonBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--mainBgColor);
  position: absolute;
  bottom: -10px;
  left: 20%;
  rotate: 45deg;
`;

export const Box = styled.div`
  height: 100px;
  display: flex;
  margin-left: 20%;
  align-items: center;
  color: var(--secondaryTextColor);
  text-align: left;

  h3 {
    font-family: "Josefin Sans";
    font-weight: 400;
  }

  h4 {
    font-family: "Bitter";
    font-weight: 400;
    font-size: 0.7rem;
  }
  img {
    max-width: 50px;
    margin-right: 20px;
    height: 50px;
    border-radius: 50%;
  }
`;
