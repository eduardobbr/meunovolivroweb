import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh - 225px;
`;

export const Banner = styled.section`
  background: url("http://localhost:1337/uploads/banner_img01_5108e8d364.jpeg"),
    var(--mainBgColor);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
  color: var(--secondaryTextColor);
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

  a {
    position: relative;
    font-size: 14px;
    color: var(--secondaryTextColor);
    border: 1px solid var(--secondaryTextColor);
    text-transform: uppercase;
    box-shadow: 0 2px 0px 0px rgba(255, 255, 255, 0.9);
    padding: 15px 25px;
    font-weight: 300;
    transition: 300ms ease-in-out;
  }

  a:hover {
    background-color: var(--primaryColor);
  }

  img {
    position: relative;
    width: 150px;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
  }

  img:hover {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--mainBgColorOpacity);
  }
`;

export const BannerTitle = styled.h2`
  position: relative;
  font-size: 35px
  font-family: "Bitter", Sans-serif;
`;

export const BannerDescription = styled.p`
  position: relative;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 300;
`;
