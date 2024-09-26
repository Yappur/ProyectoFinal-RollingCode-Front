import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/ComponentsCSS/NavbarC.css";

const NavbarC = () => {
  return (
    <div className="container-nav">
      <Navbar expand="lg" className="bg-color-nav">
        <Container className="d-flex">
          <Navbar.Brand href="/">
            <img
              src="../src/assets/img/EnerGymLogo2.png"
              alt="logo del gimnasio"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/planes">Planes</Nav.Link>
              <Nav.Link href="*">Galeria</Nav.Link>
              <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
              <Nav.Link href="/register">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
