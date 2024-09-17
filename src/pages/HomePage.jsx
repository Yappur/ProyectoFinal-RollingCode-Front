import CarouselC from "../components/CarouselC";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomePage.css";
import WhatsappContact from "../components/WhatsappContact";
import CardC from "../components/CardC";
import UbicacionC from "../components/UbicacionC";
import RedesSociales from "../components/RedesSocialesC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const HomePage = () => {
  cambiarTituloPagina("HomePage");
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/planes");
  };

  // datos Mockeado de cards
  const clasesGym = [
    {
      titulo: "Crossfit",
      descripcion: "Clase 1",
      imagen: "../src/assets/img/gym1image.png",
    },
    {
      titulo: "Pilates",
      descripcion: "Clase 2",
      imagen: "../src/assets/img/gym1image.png",
    },
    {
      titulo: "Funcional",
      descripcion: "Clase 3",
      imagen: "../src/assets/img/gym1image.png",
    },
  ];

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
        <div className="container-Clases">
          <h2 className="textoClases text-center mt-3">
            Veni y unite a nuestras clases
          </h2>
          <div className="cardsHome scale-up-center">
            {clasesGym.map((clase) => (
              <CardC
                key={clase.titulo}
                titulo={clase.titulo}
                descripcion={clase.descripcion}
                imagen={clase.imagen}
              />
            ))}
          </div>
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
