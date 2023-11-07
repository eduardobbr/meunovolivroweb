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
      <div>
        <TextContent>
          <BannerDescription>Produza, publique e distribua</BannerDescription>
          <BannerTitle>Vamos fazer um livro legal juntos?</BannerTitle>
          <Link to="/plans">Vem Publicar</Link>
        </TextContent>
        <ImgContent>
          <img
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/banner-book.png"
            alt="Livro de divulgação"
          />
        </ImgContent>
      </div>
    </Banner>
  );
};

export default FirstBanner;
