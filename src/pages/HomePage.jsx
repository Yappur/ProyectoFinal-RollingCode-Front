import CarouselC from "../components/CarouselC";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomePage.css";
import WhatsappContact from "../components/WhatsappContact";
import UbicacionC from "../components/UbicacionC";
import RedesSociales from "../components/RedesSocialesC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import TableBeneficiosC from "../components/TableBeneficiosC";
import { useEffect, useState } from "react";
import BotonC from "../components/BotonC";
import PromocionGym from "../components/HomeComponents/PromocionGym";
import InfiniteCarousel from "../components/HomeComponents/InfiniteCarousel";

const HomePage = () => {
  cambiarTituloPagina("HomePage");

  return (
    <>
      <RedesSociales />
      <div className="container-home">
        <div className="bienvenida " transition-style="in:square:hesitate">
          <h1 className="scale-up-center">
            Bienvenido a <span className="h1-titulo">EnerGYM</span>
          </h1>
          <p>Rompe tus límites, no tus sueños.</p>
          <BotonC to={"/planes"} children={"¡Empieza hoy!"} />
        </div>
        <InfiniteCarousel />
        <PromocionGym />

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
          <div className="containerHome-ubicacion ">
            <h3 className="estilo-degradado text-center">
              ¡Acercate y Conoce nuestra sucursal!
            </h3>
            <UbicacionC />
          </div>
        </div>
        <div className="imagenApp ">
          <img src="/public/img/energymApp.png" alt="appEnergym" />
        </div>
        <div className="invitacion-login">
          <h3>¿Todavia no te registraste?</h3>

          <BotonC to={"/login"} children={"Iniciar Sesión"} />
          <BotonC to={"/register"} children={"Registrarme"} />
        </div>
        <WhatsappContact />
      </div>
    </>
  );
};

export default HomePage;
