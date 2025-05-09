import { Carousel } from "react-responsive-carousel";
import { Balloon, BalloonBox, Box, Container, Content, Title } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AuthorsCar = () => {
  return (
    <Container>
      <Content>
        <Title>O que os autores falam sobre nós</Title>
        <Carousel
          autoPlay
          showArrows
          stopOnHover
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <div>
              <Balloon>
                Madness ultimate eternal-return hope insofar decieve victorious
                good faithful pinnacle endless free christian. Holiest merciful
                ultimate christianity ultimate truth salvation against morality
                decieve prejudice. Fearful.
                <BalloonBox />
              </Balloon>
            </div>
            <Box>
              <img
                src="https://meunovolivro.com.br/wp-content/uploads/2022/07/team-image01.jpg"
                alt="Foto do Autor"
              />
              <div>
                <h3>John Doe</h3>
                <h4>Autor de Minha Mãe e Eu</h4>
              </div>
            </Box>
          </div>
          <div>
            <div>
              <Balloon>
                Madness ultimate eternal-return hope insofar decieve victorious
                good faithful pinnacle endless free christian. Holiest merciful
                ultimate christianity ultimate truth salvation against morality
                decieve prejudice. Fearful.
                <BalloonBox />
              </Balloon>
            </div>
            <Box>
              <img
                src="https://meunovolivro.com.br/wp-content/uploads/2022/07/team-image01.jpg"
                alt="Foto do Autor"
              />
              <div>
                <h3>John Doe</h3>
                <h4>Autor de Minha Mãe e Eu</h4>
              </div>
            </Box>
          </div>
          <div>
            <div>
              <Balloon>
                Madness ultimate eternal-return hope insofar decieve victorious
                good faithful pinnacle endless free christian. Holiest merciful
                ultimate christianity ultimate truth salvation against morality
                decieve prejudice. Fearful.
                <BalloonBox />
              </Balloon>
            </div>
            <Box>
              <img
                src="https://meunovolivro.com.br/wp-content/uploads/2022/07/team-image01.jpg"
                alt="Foto do Autor"
              />
              <div>
                <h3>John Doe</h3>
                <h4>Autor de Minha Mãe e Eu</h4>
              </div>
            </Box>
          </div>
        </Carousel>
      </Content>
    </Container>
  );
};

export default AuthorsCar;
