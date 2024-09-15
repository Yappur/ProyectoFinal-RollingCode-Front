import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <Container className="container-login ">
        <div class="textoIniciarSesion my-3"></div>
        <FormC
          titulo={"Iniciar Sesion"}
          subtitulo={"No tenes una cuenta?"}
          toUrl={"/register"}
        />
      </Container>
    </>
  );
};

export default LoginPage;
