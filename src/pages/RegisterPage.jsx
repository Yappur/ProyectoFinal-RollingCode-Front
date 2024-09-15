import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <Container className="container-registro">
        <div className="textoRegistro">
          <FormC
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
