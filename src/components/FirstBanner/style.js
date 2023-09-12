import { styled } from "styled-components";

export const Banner = styled.section`
  background: url("http://localhost:1337/uploads/banner_img01_5108e8d364.jpeg"),
    var(--mainBgColor);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 500px;
  color: var(--secondaryTextColor);
  text-align: center;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

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
  font-size: 35px;
  font-weight: 800;
  font-family: "Bitter", Sans-serif;
`;

export const BannerDescription = styled.p`
  position: relative;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 300;
`;

export const TextContent = styled.div`
  width: 100%;
  height: 50%;
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
    border-bottom: 4px solid var(--secondaryTextColor);
    text-transform: uppercase;
    padding: 15px 25px;
    font-weight: 300;
    transition: 300ms ease-in-out;
    border-radius: 2px;
    width: 175px;
  }

  a:hover {
    background-color: var(--primaryColor);
  }
`;

export const ImgContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;

  img {
    position: relative;
    width: 150px;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
  }

  img:hover {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
    width: 155px;
  }
`;
