import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Turnero = () => {
  return (
    <>
      <Container className="d-flex my-5 justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="datetime-local" placeholder="Ingresar fecha" />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Turnero;