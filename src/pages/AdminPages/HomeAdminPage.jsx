import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import { Button } from "react-bootstrap";
import "../../css/PagesCSS/HomeAdminPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "../HomePage";
import HomeUserPage from "../HomeUserPage";

const HomeAdminPage = () => {
  cambiarTituloPagina("HomeAdminPage");
  const navigate = useNavigate();
  const [view, setView] = useState("admin");

  const handlePanelUsuariosClick = () => {
    navigate("/admin/usuarios");
  };
  const handlePanelClasesClick = () => {
    navigate("/admin/clases");
  };
  return (
    <>
      <div className="container-admin">
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
            <Button
              variant="outline-warning"
              size="lg"
              onClick={() => setView("home")}
            >
              Vista Previa Home
            </Button>{" "}
            <Button
              variant="outline-warning"
              size="lg"
              onClick={() => setView("user")}
            >
              Vista Previa HomeUser
            </Button>
            <div>
              {view === "home" && <HomePage />}
              {view === "user" && <HomeUserPage />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdminPage;
