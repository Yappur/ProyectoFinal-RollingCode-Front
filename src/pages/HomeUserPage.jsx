import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import Button from "react-bootstrap/Button";
import RedesSociales from "../components/RedesSocialesC";
import WhatsappContact from "../components/WhatsappContact";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomeUserPage.css";
import TableBeneficiosC from "../components/TableBeneficiosC";
import UbicacionC from "../components/UbicacionC";
import ApiClima from "../components/ApiClima";

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
            ¡Gracias por registrarte en nuestro Gimnasio!
          </h1>
        </div>

        <div className="imagenTurnos">
          <Button variant="outline-light" onClick={handleClick}>
            Saca tu Turno{" "}
          </Button>
        </div>

        <div className="container-sucursales">
          <div className="container-ubicacion">
            <h3>Veni y conoce nuestra sucursal</h3>
            <UbicacionC />
          </div>
        </div>
      </div>

      <WhatsappContact />
    </>
  );
};

export default HomeUserPage;
