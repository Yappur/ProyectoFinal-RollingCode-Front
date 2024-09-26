import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/ComponentsCSS/FormC.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormularioContact = () => {
  const navigate = useNavigate();
  const [formContact, setFormContact] = useState({});
  const [errors, setErrors] = useState({});
  const isRegisterPage = true; // Puedes definir una lógica para identificar la página

  const handleChangeContact = (ev) => {
    setFormContact({ ...formContact, [ev.target.name]: ev.target.value });
  };

  const handleClickContact = (ev) => {
    ev.preventDefault();
    const { nombre, gmail, asunto, mensaje } = formContact;

    if (!nombre) {
      setErrors({ ...errors, errorNombre: true });
    }
    if (!gmail) {
      setErrors({ ...errors, errorGmail: true });
    }
    if (!asunto) {
      setErrors({ ...errors, errorAsunto: true });
    }
    if (!mensaje) {
      setErrors({ ...errors, errorMensaje: true });
    }

    if (nombre && gmail && asunto && mensaje) {
      Swal.fire({
        title: "Mensaje Enviado",
        text: "Gracias por contactarnos.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/"); // Redirige a la página principal
      }, 2000);
    }
  };

  return (
    <div className="d-flex justify-content-between my-3 containerBoxs">
      {/* Contenedor del párrafo a la izquierda */}
      <div style={{ flex: "1", marginRight: "20px" }}>
        <h4>Estamos para ayudarte</h4>
        <p>Consultanos lo que sea...</p>
        <p>
          ¡Gracias por visitar nuestro sitio web! Estamos encantados de poder
          ayudarte. Por favor, completa el siguiente formulario con tus datos de
          contacto y tu mensaje, y nos pondremos en contacto contigo lo antes
          posible. Tu opinión es importante para nosotros y estamos aquí para
          responder a todas tus preguntas y comentarios.
        </p>
      </div>

      {/* Contenedor del formulario a la derecha */}
      <Form style={{ flex: "1" }}>
        <h1>{isRegisterPage ? "" : "Inicio de Sesión"}</h1>
        {isRegisterPage && (
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Nombre</Form.Label>
            <FaUser className="icon" />
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Nombre"
              onChange={handleChangeContact}
              className={
                errors.errorNombre ? "form-control is-invalid" : "form-control"
              }
            />
            {errors.errorNombre && (
              <p className="text-danger">Campo NOMBRE vacío</p>
            )}
          </Form.Group>
        )}
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
            onChange={handleChangeContact}
          />
          {errors.errorGmail && (
            <p className="text-danger">Campo GMAIL vacío</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAsunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            name="asunto"
            type="text"
            placeholder="Asunto"
            onChange={handleChangeContact}
            className={
              errors.errorAsunto ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.errorAsunto && (
            <p className="text-danger">Campo ASUNTO vacío</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMensaje">
          <Form.Label>Escribir un Mensaje</Form.Label>
          <Form.Control
            name="mensaje"
            as="textarea"
            rows={3}
            placeholder="Escribe tu mensaje aquí"
            onChange={handleChangeContact}
            className={
              errors.errorMensaje ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.errorMensaje && (
            <p className="text-danger">Campo MENSAJE vacío</p>
          )}
        </Form.Group>
        <Button
          className="w-100"
          variant="primary"
          type="submit"
          onClick={handleClickContact}
        >
          Enviar Mensaje
        </Button>
        <div className="containerSubtitulo d-flex justify-content-center">
          <span className="subtitulo">
            {isRegisterPage ? "" : "/"}
            <Link to={"/"}></Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default FormularioContact;
