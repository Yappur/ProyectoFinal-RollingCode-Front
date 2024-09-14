import CarouselC from "../components/CarouselC";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomePage.css";
import WhatsappContact from "../components/WhatsappContact";
import CardC from "../components/CardC";
import UbicacionC from "../components/UbicacionC";
import RedesSociales from "../components/RedesSocialesC";

const HomePage = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/planes");
  };

  return (
    <>
      <RedesSociales />
      <div className="container-home">
        <div className="bienvenida">
          <h1 className="scale-up-center">
            Bienvenido a <span className="h1-titulo">EnerGYM</span>
          </h1>
          <p>Rompe tus límites, no tus sueños.</p>

          <Button variant="outline-light" onClick={handleClick}>
            Empieza Hoy!
          </Button>
          {""}
        </div>

        <div className="cardsHome scale-up-center">
          <h2 className="text-center mt-5">Veni y unite a nuestras clases</h2>
          <CardC />
        </div>

        <UbicacionC />

        <div className="imagenApp ">
          <img src="../src/assets/img/energymApp.png" alt="" />
        </div>
        <CarouselC />

        <WhatsappContact />
      </div>
    </>
  );
};

export default HomePage;
