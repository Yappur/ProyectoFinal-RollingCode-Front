import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/PagesCSS/Instalaciones.css";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const InstalacionesPage = () => {
  cambiarTituloPagina("instalacionesPage");

  const galeriaImagenes = [
    {
      original: "../src/assets/img/entrenadores1.png",
      thumbnail: "../src/assets/img/entrenadores1.png",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
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
