import React from "react";
import "../css/PagesCSS/Instalaciones.css";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import imagendegym from "../assets/img/GaleriaHombreHaciendoEjercicio.jpeg";
import imagendelgym from "../assets/img/GaleriaMujerHaciendoEjercicio.jpeg";
import imagengym from "../assets/img/GaleriaPechoInclinadoGym.jpeg";
import imagen from "../assets/img/GaleriaPechoPlanoGym.jpeg";
import img from "../assets/img/GaleriaPesasGym.jpeg";
import imagym from "../assets/img/GaleriaRemoGym.jpeg";

const InstalacionesPage = () => {
  cambiarTituloPagina("InstalacionesPage");

  const images = [
    { src: imagendegym, alt: "Hombre haciendo ejercicio" },
    { src: imagendelgym, alt: "Mujer haciendo ejercicio" },
    { src: imagengym, alt: "Pecho inclinado en el gimnasio" },
    { src: imagen, alt: "Pecho plano en el gimnasio" },
    { src: img, alt: "Pesas del gimnasio" },
    { src: imagym, alt: "Remo en el gimnasio" },
  ];

  return (
    <div className="instalaciones-container">
      <h2 className="text-center my-4">Conoce nuestras instalaciones</h2>
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div className="col-md-4 mb-2 px-1" key={index}>
            <div className="card-container">
              <img
                src={image.src}
                alt={image.alt}
                className="card-img-top"
                style={{ height: "300px", objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalacionesPage;
