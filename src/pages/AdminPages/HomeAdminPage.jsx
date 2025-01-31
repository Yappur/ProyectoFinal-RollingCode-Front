import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import { Button } from "react-bootstrap";
import "../../css/PagesCSS/HomeAdminPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BotonC from "../../components/BotonC";
import HomePage from "../HomePage";
import HomeUserPage from "../HomeUserPage";

const HomeAdminPage = () => {
  cambiarTituloPagina("HomeAdminPage");
  const navigate = useNavigate();
  const [view, setView] = useState("admin");

  return (
    <>
      <div className="container-admin">
        <h1 className="estilo-degradado">Admin EnerGym</h1>
        <div className="botones-admin">
          <div className="botones-paneles">
            <BotonC to={"/admin/usuarios"} children={"Panel Usuarios"} />
            <BotonC to={"/admin/clases"} children={"Panel Clases"} />
            <BotonC to={"/admin/turnos"} children={"Panel Turnos"} />
          </div>
          {/* <div className="mb-2">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeAdminPage;
