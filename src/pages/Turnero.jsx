import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UbicacionC from "../components/UbicacionC";
import RedesSociales from "../components/RedesSocialesC";
import "../css/PagesCSS/Turnos.css";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
const Turnero = () => {
  cambiarTituloPagina("Turnero");
  return (
    <>
      <div className="container-turnero ">
        <h2>¡Registre su turno!</h2>
        <div className="container-select">
          <Form.Label>Seleccione su clase</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">CroosFit</option>
            <option value="2">Pilates</option>
            <option value="3">Funcional</option>
          </Form.Select>
        </div>

        <Container className="container-form ">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="datetime-local"
                step="3600"
                placeholder="Ingresar fecha"
              />
            </Form.Group>
          </Form>
        </Container>
      </div>

      <RedesSociales />
    </>
  );
};

export default Turnero;
