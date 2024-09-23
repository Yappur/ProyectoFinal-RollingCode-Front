import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/LoginPage.css";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const LoginPage = () => {
  cambiarTituloPagina("LoginPage");
  return (
    <>
      <Container className="container-login ">
        <div class="textoIniciarSesion "></div>
        <FormC
          idPagina={"login"}
          titulo={"Iniciar Sesión"}
          subtitulo={"No tenes una cuenta?"}
          toUrl={"/register"}
        />
      </Container>
    </>
  );
};

export default LoginPage;
