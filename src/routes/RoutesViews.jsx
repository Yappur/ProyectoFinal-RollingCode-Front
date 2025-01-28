import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App404 from "../pages/App404";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HomeAdminPage from "../pages/AdminPages/HomeAdminPage";
import HomeUserPage from "../pages/HomeUserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PlanesPage from "../pages/PlanesPage";
import PanelUsuarios from "../pages/AdminPages/PanelUsuarios";
import PanelClases from "../pages/AdminPages/PanelClases";
import InstalacionesPage from "../pages/InstalacionesPage";
import Turnero from "../pages/UserPages/Turnero";
import VerTurnos from "../pages/UserPages/VerTurnos";

const RoutesViews = () => {
  return (
    <>
      <Routes>
        <Route path="/turnos" element={<Turnero />} />
        <Route path="/turnos/mis-turnos" element={<VerTurnos />} />
        <Route path="/planes" element={<PlanesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-home" element={<HomeUserPage />} />
        <Route path="/admin-home" element={<HomeAdminPage />} />
        <Route path="/admin/usuarios" element={<PanelUsuarios />} />
        <Route path="/admin/clases" element={<PanelClases />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/galeria" element={<InstalacionesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<App404 />} />
      </Routes>
    </>
  );
};

export default RoutesViews;
