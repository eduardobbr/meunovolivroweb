import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";
import FirstBanner from "../../components/FirstBanner";
import BookPreCalc from "../../components/BookPreCalc";

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <FirstBanner />
        <BookPreCalc />
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
