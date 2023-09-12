import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";
import FirstBanner from "../../components/FirstBanner";

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <FirstBanner />
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
