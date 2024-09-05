import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import CarouselC from "../components/CarouselC";

const HomePage = () => {
  return (
    <>
      <div>
        <img
          src="../src/assets/img/gymejemplo.jpeg"
          alt="gym image"
          width={"100%"}
          height={"750vh"}
        />
      </div>
      <CarouselC />
    </>
  );
};

export default HomePage;
