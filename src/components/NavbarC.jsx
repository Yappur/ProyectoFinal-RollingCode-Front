import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/ComponentsCSS/NavbarC.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarC = () => {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token")) || "";
  const role = JSON.parse(sessionStorage.getItem("role")) || "";

  const cerrarSesion = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  // const handleHomeClick = (ev) => {
  //   ev.preventDefault();
  //   if (usuarioLogueado) {
  //     // Redirige según el tipo de usuario
  //     if (usuarioLogueado.role === "admin") {
  //       navigate("/admin-home"); // Redirige a la página de administrador
  //     } else if (usuarioLogueado.role === "usuario") {
  //       navigate("/user-home"); // Redirige a la página de usuario
  //     }
  //   } else {
  //     navigate("/"); // Redirige a la página principal genérica si no está logueado
  //   }
  // };

  return (
    <div className="container-nav">
      <Navbar expand="lg" className="bg-color-nav">
        <Container className="d-flex">
          <Navbar.Brand
            href={
              token && role === "user"
                ? "/user-home"
                : token && role === "admin"
                ? "/admin-home"
                : "/"
            }
          >
            <img
              src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831014/EnerGymLogo2_isqtjp.png"
              alt="logo del gimnasio"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                to={
                  token && role === "user"
                    ? "/user-home"
                    : token && role === "admin"
                    ? "/admin-home"
                    : "/"
                }
                className={"nav-link"}
              >
                Inicio
              </Nav.Link>
              <Nav.Link href="/planes">Planes</Nav.Link>
              <Nav.Link href="/galeria">Galeria</Nav.Link>
              {token && role !== "admin" ? (
                <>
                  <NavLink to="#link" className={"nav-link"}>
                    Sobre Nosotros
                  </NavLink>
                  <NavLink to="#link" className={"nav-link"}>
                    Contacto
                  </NavLink>
                  {role === "user" && (
                    <>
                      <NavLink to="/tunero" className={"nav-link"}>
                        Turnos
                      </NavLink>
                    </>
                  )}
                </>
              ) : (
                <>
                  <NavLink to="/admin/users" className={"nav-link"}>
                    Panel Usuarios
                  </NavLink>
                  <NavLink to="/admin/products" className={"nav-link"}>
                    Panel Productos
                  </NavLink>
                </>
              )}
            </Nav>
            {token ? (
              <Nav className="ms-auto">
                <NavLink to="#" className={"nav-link"} onClick={cerrarSesion}>
                  Cerrar Sesion
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink to="/login" className={"nav-link"}>
                  Iniciar Sesion
                </NavLink>
                <NavLink to="/register" className={"nav-link"}>
                  Registrarse
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
