import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavbarC.css";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-color-nav">
        <Container className="">
          <Navbar.Brand href="/">
            <img
              src="../src/assets/img/EnerGymLogo2.png"
              alt="logo del gimnasio"
              width={"110px"}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="./pages/AboutPage.jsx">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#link">Iniciar Sesion</Nav.Link>
              <Nav.Link href="#link">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
