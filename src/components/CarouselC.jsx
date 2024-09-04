import Carousel from "react-bootstrap/Carousel";

const CarouselC = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src="https://picsum.photos/2000/300?random=1" alt="Imagen 1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/2000/300?random=2" alt="Imagen 1" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/2000/300?random=3" alt="Imagen 1" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselC;
