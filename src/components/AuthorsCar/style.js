import { styled } from "styled-components";

export const Container = styled.section`
  background: url("http://localhost:1337/uploads/testi_bg_ec653bbdde.jpeg"),
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
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .carouselContainer {
    width: 100%;
    height: 70%;
  }
  .carouselItem {
    height: 90%;
  }
  .swiper-button-prev {
    height: 30px;
    position: absolute;
  }
  .swiper-button-prev:after {
    height: 30px;
    font-size: 30px;
  }
`;

export const Title = styled.h2`
  color: var(--secondaryTextColor);
  font-weight: 800;
  font-size: 31px;
  padding: 15px 0;
`;
