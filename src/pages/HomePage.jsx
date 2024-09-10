import CarouselC from "../components/CarouselC";
import Button from "react-bootstrap/Button";

import "../css/PagesCSS/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="container-home">
        <div className="bienvenida">
          <h1 className="scale-up-center">
            Bienvenido a <span className="h1-titulo">EnerGYM</span>
          </h1>
          <p>Rompe tus límites, no tus sueños.</p>
          <Button variant="outline-light">Empieza Hoy!!</Button>{" "}
        </div>
        <CarouselC />
      </div>
    </>
  );
};

export default HomePage;
