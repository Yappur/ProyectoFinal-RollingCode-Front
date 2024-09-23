import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/ComponentsCSS/FormC.css";
import { Link, useNavigate } from "react-router-dom";
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
  const handleClickRegister = (ev) => {
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

    if (nombre && gmail && contrasenia && repetirContrasenia) {
      if (contrasenia === repetirContrasenia) {
        const usuariosLocalStorage =
          JSON.parse(localStorage.getItem("usuarios")) || [];

        const gmailExiste = usuariosLocalStorage.find(
          (user) => user.gmail === gmail
        );
        if (gmailExiste) {
          alert("GMAIL no disponible");
        }

        const nuevoUsuario = {
          id:
            usuariosLocalStorage[usuariosLocalStorage.length - 1]?.id + 1 || 1,
          nombre,
          gmail,
          contrasenia,
          role: "admin",
          bloqueado: false,
          login: true,
        };

        usuariosLocalStorage.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));

        Swal.fire({
          title: "USUARIO REGISTRADO",
          text: "Redireccionando",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        alert("las contraseñas no son iguales");
      }
    }
  };

  //Login Form
  const handleClickLogin = (ev) => {
    ev.preventDefault();
    const { gmail, contrasenia } = formLogin;

    if (!gmail) {
      setErrors({ ...errors, errorGmail: true });
    }
    if (!contrasenia) {
      setErrors({ ...errors, errorContrasenia: true });
    }

    if (gmail && contrasenia) {
      const usuariosLocalStorage =
        JSON.parse(localStorage.getItem("usuarios")) || [];

      const gmailExiste = usuariosLocalStorage.find(
        (user) => user.gmail === gmail
      );
      if (!gmailExiste) {
        return alert("Gmail y/o contaseña incorrecta. GMAIl");
      }

      if (contrasenia === gmailExiste.contrasenia) {
        const posicionUsuario = usuariosLocalStorage.findIndex(
          (user) => user.id === gmailExiste.id
        );
        usuariosLocalStorage[posicionUsuario].login = true;
        gmailExiste.login = true;
        localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
        sessionStorage.setItem("usuario", JSON.stringify(gmailExiste));
        gmailExiste.role === "admin"
          ? setTimeout(() => {
              navigate("/admin-home");
            }, 2000)
          : setTimeout(() => {
              navigate("/user-home");
            }, 2000);
        Swal.fire({
          title: "Inicio de Sesión Correcto",
          text: "Redireccionando",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        return alert("Gmail yo Contrasela incorrecto. Contraseña");
      }
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
