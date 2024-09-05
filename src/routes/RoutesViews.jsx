import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App404 from "../pages/App404";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HomeAdminPage from "../pages/HomeAdminPage";
import HomeUserPage from "../pages/HomeUserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Turnero from "../pages/Turnero";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";

const RoutesViews = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/turnero" element={<Turnero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-home" element={<HomeUserPage />} />
        <Route path="/admin-home" element={<HomeAdminPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<App404 />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
