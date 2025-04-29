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
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/book-image02.png"
            alt="Livro de divulgação"
          />
          <SecondImg
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/book-image01.png"
            alt="Livro de divulgação"
          />
        </ImgContent>
      ) : (
        <></>
      )}

      <CheckoutContent>
        <Title>Poucos passos para publicas sua obra</Title>
        <Paragraph>
          <Link to="/login-register">Comece agora</Link>
        </Paragraph>
      </CheckoutContent>
    </Container>
  );
};

export default SecondBanner;
