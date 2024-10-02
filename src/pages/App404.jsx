import "../css/PagesCSS/App404.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const App404 = () => {
  cambiarTituloPagina("ERROR");
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/");
  };
  return (
    <div className="imagenError">
      <img
        src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831025/error404_d7jmnk.png"
        alt="Error 404"
      />
      <Button variant="outline-light" onClick={handleClick}>
        Volver Atras
      </Button>
      {""}
    </div>
  );
};

export default App404;
