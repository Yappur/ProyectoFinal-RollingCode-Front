import CarouselC from "../components/CarouselC";
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
import clientAxios from "../helpers/axios.config";
import AcordeonClases from "../components/HomeComponents/AcordeonClases";
import InfiniteCarousel from "../components/HomeComponents/InfiniteCarousel";

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
      <div className="container-home ">
        <div className="bienvenida " transition-style="in:wipe:bottom-left">
          <h1 className="scale-up-center">
            Bienvenido a <span className="h1-titulo">EnerGYM</span>
          </h1>
          <p>Rompe tus límites, no tus sueños.</p>
          <BotonC to={"/planes"} children={"¡Empieza hoy!"} />
        </div>
        <InfiniteCarousel />

        <div class="container my-5">
          <div class="row gym-promo-container">
            <div class="col-md-5 image-section">
              <div class="image-wrapper">
                <img
                  src="https://res.cloudinary.com/doh6efk57/image/upload/v1738515132/Energym_lq9rsl.png"
                  alt="Gimnasio del futuro"
                  class="promo-image"
                />
              </div>
            </div>
            <div class="col-md-7 content-section">
              <h2 class="text-primary mb-4">
                💥 ¡Descubre el gimnasio del FUTURO! 💥
              </h2>

              <div class="promo-content">
                <p>
                  Bienvenido a [Nombre del Gimnasio], donde el fitness se
                  encuentra con la innovación. Ubicado en una de las mejores
                  zonas de la ciudad, nuestro centro redefine la experiencia de
                  entrenar. 🏋️‍♂️✨
                </p>

                <ul class="features-list">
                  <li>
                    🔥 Entrenamiento de alto nivel con equipamiento de última
                    tecnología
                  </li>
                  <li>
                    🧘 Clases personalizadas y grupales diseñadas para todos los
                    niveles
                  </li>
                  <li>💆 Zona de SPA & Wellness para una recuperación total</li>
                  <li>
                    🎯 Coaching exclusivo para alcanzar tu máximo potencial
                  </li>
                </ul>

                <p class="highlight-text">
                  Aquí no solo entrenas… ¡EVOLUCIONAS! 💪⚡
                </p>

                <p>
                  ¡Ven a conocer la revolución del fitness y lleva tu cuerpo y
                  mente al siguiente nivel! 🚀
                </p>

                <div class="contact-info">
                  <p>📍 [Dirección del gimnasio]</p>
                  <p>📞 [Teléfono]</p>
                  <p>🌐 [Sitio web/redes sociales]</p>
                </div>
              </div>
            </div>
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
        <ApiClima />
        <WhatsappContact />
      </div>
    </>
  );
};

export default HomePage;
