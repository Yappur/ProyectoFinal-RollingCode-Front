import CarouselC from "../components/CarouselC";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomePage.css";
import WhatsappContact from "../components/WhatsappContact";
import CardC from "../components/CardC";
import UbicacionC from "../components/UbicacionC";
import RedesSociales from "../components/RedesSocialesC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import TableBeneficiosC from "../components/TableBeneficiosC";
import { useEffect, useState } from "react";
import BotonC from "../components/BotonC";
import ApiClima from "../components/ApiClima";

const HomePage = () => {
  cambiarTituloPagina("HomePage");
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/planes");
  };

  const [clases, setClases] = useState([]);
  const obtenerClases = () => {
    const clasesLs = JSON.parse(localStorage.getItem("clases")) || [];
    setClases(clasesLs);
  };

  useEffect(() => {
    obtenerClases();
  }, []);

  useEffect(() => {
    const handleClasesActualizadas = () => {
      obtenerClases();
    };

    window.addEventListener("clasesActualizadas", handleClasesActualizadas);

    // Cleanup del listener
    return () => {
      window.removeEventListener(
        "clasesActualizadas",
        handleClasesActualizadas
      );
    };
  }, []);

  return (
    <>
      <RedesSociales />
      <div className="container-home">
        <div className="bienvenida">
          <h1 className="scale-up-center">
            Bienvenido a <span className="h1-titulo">EnerGYM</span>
          </h1>
          <p>Rompe tus límites, no tus sueños.</p>
          <BotonC to={"/planes"} children={"¡Empieza hoy!"} />
        </div>
        <div className="container-Clases">
          <h2 className="textoClases text-center mt-3">
            Veni y forma parte de nuestras clases
          </h2>
          <div className="cardsHome scale-up-center">
            {clases.map((clase) => (
              <CardC
                key={clase.id}
                clase={clase}
                to={`/planes`}
                texto={"Ver Mas"}
              />
            ))}
          </div>
        </div>
        <div className="container-carousel">
          <CarouselC />
        </div>

        <div className="container-beneficios">
          <h2 className=" text-center mb-4">
            Conoce los Beneficios de <span className="h1-titulo">EnerGYM</span>.
          </h2>
          <TableBeneficiosC />
        </div>
        <div className="container-ubicacion-bg">
          <div className="container-ubicacion">
            <h3 className="text-center mb-4">
              {" "}
              Veni y Conoce nuestra sucursal
            </h3>
            <UbicacionC />
          </div>
        </div>

        <div className="imagenApp ">
          <img src="../src/assets/img/energymApp.png" alt="" />
        </div>

        <div className="invitacion-login">
          <h3>¿Todavia no te registraste?</h3>

          <BotonC to={"/login"} children={"Iniciar Sesión"} />
          <BotonC to={"/register"} children={"Registrarme"} />
        </div>

        <WhatsappContact />
      </div>
      <ApiClima />
    </>
  );
};

export default HomePage;
