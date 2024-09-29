import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import Button from "react-bootstrap/Button";
import RedesSociales from "../components/RedesSocialesC";
import WhatsappContact from "../components/WhatsappContact";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomeUserPage.css";
import { Table } from "react-bootstrap";
import TableBeneficiosC from "../components/TableBeneficiosC";
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
            Conoce los Beneficios de nuestro Gimnasio.
          </h1>
          <TableBeneficiosC />
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
