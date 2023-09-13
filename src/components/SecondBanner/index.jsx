import { Link } from "react-router-dom";
import {
  CheckoutContent,
  Container,
  OfferContent,
  Paragraph,
  Size,
  SubTitle,
  Title,
  Weight,
} from "./style";

const SecondBanner = () => {
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

      <CheckoutContent>
        <Title>Poucos passos para publicas sua obra</Title>
        <Paragraph>
          <Link>Comece agora</Link>
        </Paragraph>
      </CheckoutContent>
    </Container>
  );
};

export default SecondBanner;
