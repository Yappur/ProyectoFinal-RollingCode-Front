import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <Container className="container-registro">
        <div className="textoRegistro">
          <FormC titulo={"Registro"}></FormC>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
