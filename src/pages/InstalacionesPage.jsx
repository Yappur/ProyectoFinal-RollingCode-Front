import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/PagesCSS/Instalaciones.css";
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
      <div className="gallery-container">
        <ImageGallery items={galeriaImagenes} showPlayButton={false} />
      </div>
    </div>
  );
};

export default InstalacionesPage;
