import ImageGallery from "react-image-gallery";
import "../css/PagesCSS/Instalaciones.css";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const InstalacionesPage = () => {
  cambiarTituloPagina("instalacionesPage");

  const galeriaImagenes = [
    {
      original: "/src/assets/img/GaleriaPechoInclinadoGym.jpeg",
      thumbnail: "/src/assets/img/GaleriaPechoInclinadoGym.jpeg",
    },

    {
      original:
        "https://ionicgym.com/wp-content/uploads/2023/09/Maquinas-9-1024x683.jpg",
      thumbnail:
        "https://ionicgym.com/wp-content/uploads/2023/09/Maquinas-9-1024x683.jpg",
    },

    {
      original:
        "https://ionicgym.com/wp-content/uploads/2023/09/Parque-cuerda-1024x683.jpg",
      thumbnail:
        "https://ionicgym.com/wp-content/uploads/2023/09/Parque-cuerda-1024x683.jpg",
    },

    {
      original:
        "https://ionicgym.com/wp-content/uploads/2023/09/Cardio-1024x683.jpg",
      thumbnail:
        "https://ionicgym.com/wp-content/uploads/2023/09/Cardio-1024x683.jpg",
    },
  ];

  return (
    <div className="gallery-container">
      <ImageGallery items={galeriaImagenes} showPlayButton={false} />
    </div>
  );
};

export default InstalacionesPage;
