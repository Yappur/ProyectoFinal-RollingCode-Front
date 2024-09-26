import FormularioContact from "../components/FormularioContact";
import UbicacionC from "../components/UbicacionC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import "../css/PagesCSS/ContactPage.css";
const ContactPage = () => {
  cambiarTituloPagina("ContactPage");
  return (
    <div className="container-contact">
      <FormularioContact />
      <UbicacionC />
    </div>
  );
};

export default ContactPage;
