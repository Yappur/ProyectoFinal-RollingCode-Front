import CarouselC from "../components/CarouselC";
import Button from "react-bootstrap/Button";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="bienvenida">
        <h1>Bienvenido A EnerGYM</h1>
        <p>Rompe tus límites, no tus sueños.</p>
        <Button variant="outline-light">Comience Ahora</Button>{" "}
      </div>
      <CarouselC />
    </>
  );
};

export default HomePage;
