import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const FormC = (idPagina) => {
  const [formRegister, setFormRegister] = useState({});
  const [formLogin, setFormLogin] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeRegister = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };
  return (
    <div className="d-flex justify-content-center ">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Nombre</Form.Label> <FaUser />
          <Form.Control type="text" placeholder="Nombre" className="d-flex" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formGroupEmail"
          onChange={handleChangeRegister}
        >
          <Form.Label>Gmail</Form.Label> <IoMdMail />
          <Form.Control
            type="email"
            placeholder="Gmail"
            onChange={handleChangeRegister}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <FaLock />
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={handleChangeRegister}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRepetirContrasenia">
          <Form.Label>Repetir Contraseña</Form.Label>
          <FaLock />
          <Form.Control
            type="password"
            placeholder="Repetir Contraseña"
            onChange={handleChangeRegister}
          />
        </Form.Group>

        <Button className="w-100  " variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormC;
