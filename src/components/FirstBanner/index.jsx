import { Link } from "react-router-dom";
import {
  Banner,
  BannerDescription,
  BannerTitle,
  ImgContent,
  TextContent,
} from "./style";

const FirstBanner = () => {
  return (
    <Banner>
      <TextContent>
        <BannerDescription>Produza, publique e distribua</BannerDescription>
        <BannerTitle>Vamos fazer um livro legal juntos?</BannerTitle>
        <Link to="/plans">Vem Publicar</Link>
      </TextContent>
      <ImgContent>
        <img
          src="http://localhost:1337/uploads/banner_book01_dd9b34561a.png"
          alt="Livro de divulgação"
        />
      </ImgContent>
    </Banner>
  );
};

export default FirstBanner;
