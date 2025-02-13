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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleChangeRegister = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
    // Limpiar error del campo cuando el usuario empiece a escribir
    setErrors({
      ...errors,
      [`error${
        ev.target.name.charAt(0).toUpperCase() + ev.target.name.slice(1)
      }`]: false,
    });
  };

  const handleChangeLogin = (ev) => {
    setFormLogin({ ...formLogin, [ev.target.name]: ev.target.value });
    setErrors({
      ...errors,
      [`error${
        ev.target.name.charAt(0).toUpperCase() + ev.target.name.slice(1)
      }`]: false,
    });
  };

  const validateRegisterForm = () => {
    const { nombre, gmail, contrasenia, repetirContrasenia } = formRegister;
    const newErrors = {};
    let isValid = true;

    if (!nombre || nombre.length < 3) {
      newErrors.errorNombre = true;
      isValid = false;
    }

    if (!gmail || !validateEmail(gmail)) {
      newErrors.errorGmail = true;
      isValid = false;
    }

    if (!contrasenia || !validatePassword(contrasenia)) {
      newErrors.errorContrasenia = true;
      isValid = false;
    }

    if (!repetirContrasenia || contrasenia !== repetirContrasenia) {
      newErrors.errorRepetirContrasenia = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateLoginForm = () => {
    const { gmail, contrasenia } = formLogin;
    const newErrors = {};
    let isValid = true;

    if (!gmail || !validateEmail(gmail)) {
      newErrors.errorGmail = true;
      isValid = false;
    }

    if (!contrasenia) {
      newErrors.errorContrasenia = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleClickLogin = async (ev) => {
    ev.preventDefault();

    if (!validateLoginForm()) {
      Swal.fire({
        title: "Error de validación",
        text: "Por favor, verifica tu email y contraseña",
        icon: "error",
        confirmButtonText: "Entendido",
      });
      return;
    }

    try {
      const result = await clientAxios.post("/usuarios/iniciarSesion", {
        emailUsuario: formLogin.gmail,
        contrasenia: formLogin.contrasenia,
      });

      if (result.status === 200) {
        const cleanToken = result.data.token.replace(/['"]+/g, "");
        sessionStorage.setItem("token", cleanToken);
        sessionStorage.setItem("role", result.data.role);

        Swal.fire({
          title: "¡Bienvenido!",
          text: "Inicio de sesión exitoso",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        setTimeout(() => {
          if (result.data.role === "admin") {
            navigate("/admin-home");
          } else {
            navigate("/user-home");
          }
        }, 1500);
      }
    } catch (error) {
      console.error("Error en login:", error);

      Swal.fire({
        title: "Error",
        text: error.response?.data?.msg || "Credenciales incorrectas",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleClickRegister = async (ev) => {
    ev.preventDefault();

    if (!validateRegisterForm()) {
      Swal.fire({
        title: "Error de validación",
        text: "Por favor, verifica todos los campos del formulario",
        icon: "error",
        confirmButtonText: "Entendido",
      });
      return;
    }

    try {
      const result = await clientAxios.post(
        "/usuarios/crearUsuario",
        {
          nombreUsuario: formRegister.nombre,
          emailUsuario: formRegister.gmail,
          contrasenia: formRegister.contrasenia,
        },
        configHeaders
      );

      if (result.status === 201) {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Tu cuenta ha sido creada correctamente",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.msg || "Error al crear el usuario",
        icon: "error",
        confirmButtonText: "Ok",
      });
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
              placeholder="Nombre (mínimo 3 caracteres)"
              onChange={handleChangeRegister}
              className={
                errors.errorNombre ? "form-control is-invalid" : "form-control"
              }
            />
            {errors.errorNombre && (
              <p className="text-danger">
                El nombre debe tener al menos 3 caracteres
              </p>
            )}
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <IoMdMail className="icon" />
          <Form.Control
            name="gmail"
            type="email"
            placeholder="Email"
            className={
              errors.errorGmail ? "form-control is-invalid" : "form-control"
            }
            onChange={
              idPagina === "register" ? handleChangeRegister : handleChangeLogin
            }
          />
          {errors.errorGmail && (
            <p className="text-danger">Por favor, ingresa un email válido</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <FaLock className="icon" />
          <Form.Control
            name="contrasenia"
            type="password"
            placeholder={
              idPagina === "register"
                ? "Contraseña (mínimo 8 caracteres, incluir letra y número)"
                : "Contraseña"
            }
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
            <p className="text-danger">
              {idPagina === "register"
                ? "La contraseña debe tener al menos 8 caracteres, una letra y un número"
                : "Por favor, ingresa tu contraseña"}
            </p>
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
              <p className="text-danger">Las contraseñas no coinciden</p>
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
          {idPagina === "register" ? "Registrarse" : "Iniciar Sesión"}
        </Button>
        <div className="containerSubtitulo d-flex justify-content-center">
          <span className="subtitulo">
            {subtitulo}
            <Link to={`${toUrl}`}> Click Aquí</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default FormC;
