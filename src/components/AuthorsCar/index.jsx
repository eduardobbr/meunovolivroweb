import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Container, Content, Title } from "./style";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AuthorsCar = () => {
  return (
    <Container>
      <Content>
        <Title>O que os autores falam sobre nós</Title>
        <Swiper
          className="carouselContainer"
          modules={{ Navigation, Pagination }}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="carouselItem">teste</SwiperSlide>
          <SwiperSlide className="carouselItem">teste2</SwiperSlide>
          <SwiperSlide className="carouselItem">teste3</SwiperSlide>
        </Swiper>
      </Content>
    </Container>
  );
};

export default AuthorsCar;
