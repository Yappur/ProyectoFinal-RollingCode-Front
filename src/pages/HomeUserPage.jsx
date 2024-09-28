import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import Button from "react-bootstrap/Button";
import RedesSociales from "../components/RedesSocialesC";
import WhatsappContact from "../components/WhatsappContact";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomeUserPage.css";
const HomeUserPage = () => {
  cambiarTituloPagina("HomeUserPage");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/turnero");
  };
  return (
    <>
      <RedesSociales />
      <div>
        <div className="bienvenida-usuario">
          <h1 className="scale-up-center">
            Bienvenido a <span className="h1-titulo">EnerGYM</span>
          </h1>
          <p>Rompe tus límites, no tus sueños.</p>

          <Button variant="outline-light">Empieza Hoy!</Button>
          {""}
        </div>
        <div className="imagenTurnos">
          <Button variant="outline-light" onClick={handleClick}>
            Saca tu Turno{" "}
          </Button>
        </div>
      </div>
      <WhatsappContact />
    </>
  );
};

export default HomeUserPage;
