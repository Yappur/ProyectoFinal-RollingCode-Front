import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import { Button } from "react-bootstrap";
import "../../css/PagesCSS/HomeAdminPage.css";
import { useNavigate } from "react-router-dom";

const HomeAdminPage = () => {
  cambiarTituloPagina("HomeAdminPage");
  const navigate = useNavigate();

  const handlePanelUsuariosClick = () => {
    navigate("/admin/usuarios"); // Redirige a la página de Panel Usuarios
  };
  const handlePanelClasesClick = () => {
    navigate("/admin/clases"); // Redirige a la página de Panel Clases
  };
  return (
    <>
      <div className="botones-admin">
        <div className="mb-2">
          <Button variant="info" size="lg" onClick={handlePanelUsuariosClick}>
            Panel Usuarios
          </Button>{" "}
          <Button variant="info" size="lg" onClick={handlePanelClasesClick}>
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
