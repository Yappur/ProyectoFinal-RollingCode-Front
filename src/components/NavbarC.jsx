import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavbarC.css";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-color-nav">
        <Container className="">
          <Navbar.Brand href="#home">
            <img
              src="../public/img/logoejemplo1.jpeg"
              alt="logo del gimnasio"
              width={"150px"}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
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
