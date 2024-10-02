import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/RegisterPage.css";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";

const RegisterPage = () => {
  cambiarTituloPagina("RegisterPage");
  return (
    <>
      <Container className="container-registro">
        <div className="textoRegistro">
          <FormC
            idPagina={"register"}
            titulo={"Registro"}
            subtitulo={"Ya tenes una cuenta?"}
            toUrl={"/login"}
          ></FormC>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
