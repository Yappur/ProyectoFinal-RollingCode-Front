import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <Container className="container-login ">
        <div class="textoIniciarSesion my-3"></div>
        <FormC titulo={"Iniciar Sesion"} />
        <div class="my-3 d-flex justify-content-center">
          <p>No te acuerdas de tu contraseña?</p>
          <a href="*"> Click Aqui</a>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
