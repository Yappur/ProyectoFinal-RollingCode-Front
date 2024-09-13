import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const FormC = () => {
  return (
    <div className="d-flex justify-content-center ">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Gmail</Form.Label>
          <Form.Control type="email" placeholder="Gmail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Button className="w-100  " variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormC;
