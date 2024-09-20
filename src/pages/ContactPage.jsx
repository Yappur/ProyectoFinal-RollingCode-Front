import UbicacionC from "../components/UbicacionC";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
const ContactPage = () => {
  cambiarTituloPagina("ContactPage");
  return (
    <div>
      <UbicacionC />
    </div>
  );
};

export default ContactPage;
