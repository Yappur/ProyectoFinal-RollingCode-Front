import "../css/PagesCSS/App404.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const App404 = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/");
  };
  return (
    <div className="imagenError">
      <img src="../src/assets/img/error404.png" alt="Error 404" />
      <Button variant="outline-light" onClick={handleClick}>
        Volver Atras
      </Button>
      {""}
    </div>
  );
};

export default App404;
