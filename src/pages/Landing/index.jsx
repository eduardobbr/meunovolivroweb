import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Banner, BannerDescription, BannerTitle, Container } from "./style";

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Banner>
            <BannerDescription>Produza, publique e distribua</BannerDescription>
            <BannerTitle>Vamos fazer um livro legal juntos?</BannerTitle>
            <Link to="/plans">Vem Publicar</Link>
            <img
              src="http://localhost:1337/uploads/banner_book01_dd9b34561a.png"
              alt="Livro de divulgação"
            />
          </Banner>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
