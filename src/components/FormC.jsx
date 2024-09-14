import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/ComponentsCSS/FormC.css";
const FormC = (idPagina) => {
  const [formRegister, setFormRegister] = useState({});
  const [formLogin, setFormLogin] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeRegister = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };

  const handleClickRegister = () => {
    ev.preventDefault();
    console.log(formRegister);
    const { nombre, gmail, contrasenia, repetirContrasenia } = formRegister;
  };

  return (
    <div className="d-flex justify-content-center ">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Nombre</Form.Label>
          <FaUser className="icon" />
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Nombre"
            className="boxForm"
            onChange={handleChangeRegister}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Gmail</Form.Label>
          <IoMdMail className="icon" />
          <Form.Control
            name="gmail"
            type="email"
            placeholder="Gmail"
            className="boxForm"
            onChange={handleChangeRegister}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <FaLock className="icon" />

          <Form.Control
            name="contrasenia"
            type="password"
            placeholder="Contraseña"
            className="boxForm"
            onChange={handleChangeRegister}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRepetirContrasenia">
          <Form.Label>Repetir Contraseña</Form.Label>
          <FaLock className="icon" />

          <Form.Control
            name="repetirContrasenia"
            type="password"
            placeholder="Repetir Contraseña"
            className="boxForm"
            onChange={handleChangeRegister}
          />
        </Form.Group>

        <Button
          className="w-100  "
          variant="primary"
          type="submit"
          onClick={handleClickRegister}
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormC;
