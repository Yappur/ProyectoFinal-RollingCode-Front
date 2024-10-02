import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/PagesCSS/Instalaciones.css";
import BotonC from "../components/BotonC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const InstalacionesPage = () => {
  cambiarTituloPagina("instalacionesPage");

  const galeriaImagenes = [
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827539/galeria1_c7ynfp.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827539/galeria1_c7ynfp.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria2_bm7rjf.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria2_bm7rjf.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria3_gdr20u.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria3_gdr20u.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria4_cb5b2d.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria4_cb5b2d.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria5_wpxept.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827540/galeria5_wpxept.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827541/galeria6_y8brbx.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827541/galeria6_y8brbx.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827541/galeria7_jhluxk.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827541/galeria7_jhluxk.png",
    },
    {
      original:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827541/galeria8_tqtu38.png",
      thumbnail:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1727827541/galeria8_tqtu38.png",
    },
  ];

  return (
    <div className="container-instalaciones">
      <div className="hero-instalaciones">
        <div className="hero-instalaciones-componentes">
          <h1>GALERIA</h1>
          <BotonC to={"/planes"} children={"Hazte socio"} />
        </div>
      </div>
      <div className="text-instalaciones">
        <h2>ENERGYM EN IMÁGENES</h2>
        <p>
          Dale un vistazo a nuestras instalaciones y únete a la gran familia de
          EnerGym, tu gimnasio en Tucuman.
        </p>
      </div>
      <div className="gallery-container">
        <ImageGallery items={galeriaImagenes} showPlayButton={false} />
      </div>
    </div>
  );
};

export default InstalacionesPage;
