import { Container } from "react-bootstrap";
import FormC from "../components/FormC";
import "../css/PagesCSS/RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <Container className="container-registro">
        <div class="textoRegistro">
          <h1 class="m-4">Registro</h1>
        </div>
        <FormC />
      </Container>
    </>
  );
};

export default RegisterPage;
