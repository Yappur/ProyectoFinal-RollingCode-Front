import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/ComponentsCSS/NavbarC.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarC = () => {
  const navigate = useNavigate();
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  const handleLogout = (ev) => {
    ev.preventDefault();
    const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    const posicionUsuario = usuariosLocalStorage.findIndex(
      (user) => user.id === usuarioLogueado.id
    );

    usuariosLocalStorage[posicionUsuario].login = false;
    sessionStorage.removeItem("usuario");
    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleHomeClick = (ev) => {
    ev.preventDefault();
    if (usuarioLogueado) {
      // Redirige según el tipo de usuario
      if (usuarioLogueado.role === "admin") {
        navigate("/admin-home"); // Redirige a la página de administrador
      } else if (usuarioLogueado.role === "usuario") {
        navigate("/user-home"); // Redirige a la página de usuario
      }
    } else {
      navigate("/"); // Redirige a la página principal genérica si no está logueado
    }
  };

  return (
    <div className="container-nav">
      <Navbar expand="lg" className="bg-color-nav">
        <Container className="d-flex">
          <Navbar.Brand onClick={handleHomeClick}>
            <img
              src="../src/assets/img/EnerGymLogo2.png"
              alt="logo del gimnasio"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleHomeClick}>Inicio</Nav.Link>
              <Nav.Link href="/planes">Planes</Nav.Link>
              <Nav.Link href="*">Galeria</Nav.Link>
              <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/turnero">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {usuarioLogueado ? (
                <Nav.Link href="/" onClick={handleLogout}>
                  Cerrar Sesión
                </Nav.Link>
              ) : (
                <Nav>
                  <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                  <Nav.Link href="/register">Registrarse</Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
