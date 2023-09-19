import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";
import FirstBanner from "../../components/FirstBanner";
import BookPreCalc from "../../components/BookPreCalc";
import Works from "../../components/Works";
import SecondBanner from "../../components/SecondBanner";
import AuthorsCar from "../../components/AuthorsCar";
import LastBooks from "../../components/LastBooks";
import LastAuthors from "../../components/LastAuthors";
import BlogBox from "../../components/BlogBox";

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
        <LastAuthors />
        <BlogBox />
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
