import FormularioContact from "../components/FormularioContact";
import UbicacionC from "../components/UbicacionC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import "../css/PagesCSS/ContactPage.css";
import "../css/index.css";
const ContactPage = () => {
  cambiarTituloPagina("ContactPage");
  return (
    <div className="container-general container-contact">
      <FormularioContact />
      <h3 className="estilo-degradado d-flex justify-content-center aling-items">
        O diríjase a nuestra sucursal
      </h3>
      <UbicacionC />
    </div>
  );
};

export default ContactPage;
