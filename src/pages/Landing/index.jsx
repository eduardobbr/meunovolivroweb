import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";
import FirstBanner from "../../components/FirstBanner";
import BookPreCalc from "../../components/BookPreCalc";
import Works from "../../components/Works";

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <FirstBanner />
        <BookPreCalc />
        <Works />
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
