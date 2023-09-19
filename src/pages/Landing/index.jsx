import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";
import FirstBanner from "../../components/FirstBanner";
import BookPreCalc from "../../components/BookPreCalc";
import Works from "../../components/Works";
import SecondBanner from "../../components/SecondBanner";
import AuthorsCar from "../../components/AuthorsCar";
import LastBooks from "../../components/LastBooks";

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <FirstBanner />
        <BookPreCalc />
        <Works />
        <SecondBanner />
        <AuthorsCar />
        <LastBooks />
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
