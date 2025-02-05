import "../css/PagesCSS/App404.css";
import BotonC from "../components/BotonC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const App404 = () => {
  cambiarTituloPagina("ERROR");
  return (
    <div className="imagenError container-general app-mejorVista">
      <img
        src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831025/error404_d7jmnk.png"
        alt="Error 404"
      />
      <div className="botonVolver">
        <BotonC to="/">Volver Atras</BotonC>
        {""}
      </div>
    </div>
  );
};

export default App404;
