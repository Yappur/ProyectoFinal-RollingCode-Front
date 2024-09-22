import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/ComponentsCSS/FormC.css";
import { Link } from "react-router-dom";

const FormC = ({ toUrl, titulo, subtitulo }) => {
  const [formRegister, setFormRegister] = useState({});
  const [formLogin, setFormLogin] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeRegister = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };

  const handleClickRegister = (ev) => {
    ev.preventDefault();
    const { nombre, gmail, contrasenia, repetirContrasenia } = formRegister;

    if (!nombre) {
      return setErrors({ ...errors, errorNombre: true });
    }
    if (!gmail) {
      return setErrors({ ...errors, errorGmail: true });
    }
    if (!contrasenia) {
      return setErrors({ ...errors, errorContrasenia: true });
    }
    if (!repetirContrasenia) {
      return setErrors({ ...errors, errorRepetirContrasenia: true });
    }
  };

  return (
    <div className="d-flex justify-content-center my-3 containerBoxs">
      <Form>
        <h1>{titulo}</h1>
        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Nombre</Form.Label>
          <FaUser className="icon" />
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={handleChangeRegister}
            className={
              errors.errorNombre ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.errorNombre && (
            <p className="text-danger">Campo NOMBRE vacio</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Gmail</Form.Label>
          <IoMdMail className="icon" />
          <Form.Control
            name="gmail"
            type="email"
            placeholder="Gmail"
            className={
              errors.errorGmail ? "form-control is-invalid" : "form-control"
            }
            onChange={handleChangeRegister}
          />
          {errors.errorGmail && (
            <p className="text-danger">Campo GMAIL vacio</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <FaLock className="icon" />

          <Form.Control
            name="contrasenia"
            type="password"
            placeholder="Contraseña"
            onChange={handleChangeRegister}
            className={
              errors.errorContrasenia
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.errorContrasenia && (
            <p className="text-danger">Campo Contraseña vacio</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRepetirContrasenia">
          <Form.Label>Repetir Contraseña</Form.Label>
          <FaLock className="icon" />

          <Form.Control
            name="repetirContrasenia"
            type="password"
            placeholder="Repetir Contraseña"
            onChange={handleChangeRegister}
            className={
              errors.errorRepetirContrasenia
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.errorRepetirContrasenia && (
            <p className="text-danger">Campo REPETIR CONTRASEÑA vacio</p>
          )}
        </Form.Group>
        <Button
          className="w-100  "
          variant="primary"
          type="submit"
          onClick={handleClickRegister}
        >
          Enviar
        </Button>
        <div className="containerSubtitulo d-flex justify-content-center">
          <span className="subtitulo">
            {subtitulo}
            <Link to={`${toUrl}`}> Click Aqui</Link>{" "}
          </span>
        </div>
      </Form>
    </div>
  );
};

export default FormC;
