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
              <Balloon>Texto</Balloon>
              <BalloonBox></BalloonBox>
            </div>
            <Box>
              <img
                src="http://localhost:1337/uploads/team_image01_cb03cdcdef.jpeg"
                alt="Foto do Autor"
              />
              <div>
                <h3>autor</h3>
                <h4>livro</h4>
              </div>
            </Box>
          </div>
        </Carousel>
      </Content>
    </Container>
  );
};

export default AuthorsCar;
