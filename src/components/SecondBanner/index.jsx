import { Link } from "react-router-dom";
import {
  CheckoutContent,
  Container,
  FirstImg,
  ImgContent,
  OfferContent,
  Paragraph,
  SecondImg,
  Size,
  SubTitle,
  Title,
  Weight,
} from "./style";
import { useMediaQuery } from "@material-ui/core";
import { theme } from "../../styles/theme";

const SecondBanner = () => {
  const mobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <OfferContent>
        <SubTitle>A partir de</SubTitle>
        <Title>
          <Size>10</Size>
          <Weight>x</Weight>
        </Title>
        <SubTitle>R$280</SubTitle>
      </OfferContent>
      {mobile ? (
        <ImgContent>
          <FirstImg
            src="http://localhost:1337/uploads/book_image02_ac34c820e9.png"
            alt="Livro de divulgação"
          />
          <SecondImg
            src="http://localhost:1337/uploads/book_image01_b6cc584c88.png"
            alt="Livro de divulgação"
          />
        </ImgContent>
      ) : (
        <></>
      )}

      <CheckoutContent>
        <Title>Poucos passos para publicas sua obra</Title>
        <Paragraph>
          <Link to="/plans">Comece agora</Link>
        </Paragraph>
      </CheckoutContent>
    </Container>
  );
};

export default SecondBanner;
