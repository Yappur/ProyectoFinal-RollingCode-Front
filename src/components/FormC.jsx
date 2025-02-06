import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/ComponentsCSS/FormC.css";
import { Link, useNavigate } from "react-router-dom";
import clientAxios, { configHeaders } from "../helpers/axios.config";
import Swal from "sweetalert2";

const FormC = ({ idPagina, toUrl, titulo, subtitulo }) => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({});
  const [formLogin, setFormLogin] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeRegister = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
  };

  const handleChangeLogin = (ev) => {
    setFormLogin({ ...formLogin, [ev.target.name]: ev.target.value });
  };

  // Register Form
  const handleClickRegister = async (ev) => {
    ev.preventDefault();
    const { nombre, gmail, contrasenia, repetirContrasenia } = formRegister;

    if (!nombre) {
      setErrors({ ...errors, errorNombre: true });
    }
    if (!gmail) {
      setErrors({ ...errors, errorGmail: true });
    }
    if (!contrasenia) {
      setErrors({ ...errors, errorContrasenia: true });
    }
    if (!repetirContrasenia) {
      setErrors({ ...errors, errorRepetirContrasenia: true });
    }

    if (contrasenia === repetirContrasenia) {
      const result = await clientAxios.post(
        "/usuarios/crearUsuario",
        { nombreUsuario: nombre, emailUsuario: gmail, contrasenia },
        configHeaders
      );

      if (result.status === 201) {
        Swal.fire({
          title: "USUARIO REGISTRADO",
          text: "Redireccionando",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  //Login Form
  const handleClickLogin = async (ev) => {
    ev.preventDefault();

    try {
      // Añade console.log para verificar qué datos estás enviando
      console.log("Datos de login:", {
        emailUsuario: formLogin.gmail,
        contrasenia: formLogin.contrasenia,
      });

      const result = await clientAxios.post("/usuarios/iniciarSesion", {
        emailUsuario: formLogin.gmail,
        contrasenia: formLogin.contrasenia,
      });

      console.log("Respuesta del servidor:", result); // Para ver la respuesta

      if (result.status === 200) {
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem("role", result.data.role);

        if (result.data.role === "admin") {
          navigate("/admin-home");
        } else {
          navigate("/user-home");
        }
      }
    } catch (error) {
      console.log("Error completo:", error);
      console.log("Respuesta del servidor:", error.response?.data);
      alert(error.response?.data?.msg || "Error al iniciar sesión");
    }
  };

  return (
    <div className="d-flex justify-content-center my-3 containerBoxs">
      <Form>
        <h1>{titulo}</h1>
        {idPagina === "register" && (
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
            onChange={
              idPagina === "register" ? handleChangeRegister : handleChangeLogin
            }
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
            onChange={
              idPagina === "register" ? handleChangeRegister : handleChangeLogin
            }
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
        {idPagina === "register" && (
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
              <p className="text-danger">Campo REPETIR CONTRASEÑA vacío</p>
            )}
          </Form.Group>
        )}
        <Button
          className="w-100"
          variant="primary"
          type="submit"
          onClick={
            idPagina === "register" ? handleClickRegister : handleClickLogin
          }
        >
          {idPagina === "register" ? "Enviar Datos" : "Ingresar"}
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
