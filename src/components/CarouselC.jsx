import Carousel from "react-bootstrap/Carousel";
import "../css/ComponentsCSS/CarouselC.css";

const CarouselC = () => {
  return (
    <>
      <div className="container-carousel">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src="../src/assets/img/entrenadores1.png" alt="Imagen 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/img/entrenadores2.png" alt="Imagen 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/img/entrenadores3.png" alt="Imagen 1" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselC;
