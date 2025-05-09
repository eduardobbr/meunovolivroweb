import { styled } from "styled-components";

export const Banner = styled.section`
  background: url("https://meunovolivro.com.br/wp-content/uploads/2022/07/banner-img01.jpg"),
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

  > div {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
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

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;

    > div {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      width: 80%;
      max-width: 1200px;
    }
  }
`;

export const BannerTitle = styled.h2`
  position: relative;
  font-size: 35px;
  font-weight: 800;
  font-family: "Bitter", Sans-serif;

  @media only screen and (min-width: 960px) {
    font-size: 85px;
  }
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
    text-align: center;
  }

  a:hover {
    background-color: var(--quaternaryColor);
  }

  @media only screen and (min-width: 960px) {
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 60%;
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
    transition: 0.3s ease-in-out;
  }

  @media only screen and (min-width: 960px) {
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    width: 30%;

    img {
      width: 300px;
    }
  }
`;
