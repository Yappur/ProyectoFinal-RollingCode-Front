import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import { Button } from "react-bootstrap";
import "../css/PagesCSS/HomeAdminPage.css";

const HomeAdminPage = () => {
  cambiarTituloPagina("HomeAdminPage");
  return (
    <>
      <div className="botones-admin">
        <div className="mb-2">
          <Button variant="info" size="lg">
            Panel Usuarios
          </Button>{" "}
          <Button variant="info" size="lg">
            Panel Clases
          </Button>
        </div>
        <div className="mb-2">
          <Button variant="outline-warning" size="lg">
            Vista Previa Home
          </Button>{" "}
          <Button variant="outline-warning" size="lg">
            Vista Previa HomeUser
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeAdminPage;
