import Carousel from "react-bootstrap/Carousel";
import "../css/ComponentsCSS/CarouselC.css";

const CarouselC = () => {
  return (
    <>
      <div className="container-carousel">
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831062/entrenadores1_iqblf5.png"
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831063/entrenadores2_senkwa.png"
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831063/entrenadores3_g1vo1b.png"
              alt="Imagen 1"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselC;
