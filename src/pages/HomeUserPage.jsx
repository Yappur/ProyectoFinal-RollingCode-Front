import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import RedesSociales from "../components/RedesSocialesC";
import WhatsappContact from "../components/WhatsappContact";
import { useNavigate } from "react-router-dom";
import "../css/PagesCSS/HomeUserPage.css";
import BotonC from "../components/BotonC";
import UbicacionC from "../components/UbicacionC";
import ApiClima from "../components/ApiClima";

const HomeUserPage = () => {
  cambiarTituloPagina("HomeUserPage");

  const navigate = useNavigate();
  const handleClick = () => {};
  return (
    <>
      <RedesSociales />
      <div>
        <div className="home-user-container ">
          <div className="bienvenida-usuario container-general">
            <h1 className="estilo-degradado scale-up-center">
              ¡Gracias por registrarte en nuestro Gimnasio!
            </h1>
          </div>

          <div className="imagenTurnos">
            <img
              src="https://res.cloudinary.com/doh6efk57/image/upload/v1727831195/bienvenidaUsuario_tki0rw.png"
              alt="Invitación a sacar turno"
              className="heroUserImg"
            />
            <div className="button-container">
              <BotonC to={"/turnos"} children={"¡Saca tu turno!"} />
            </div>
          </div>
        </div>

        <div className="container-sucursales">
          <div className="container-ubicacion">
            <h3>¡Acercate y conoce nuestra sucursal!</h3>

            <UbicacionC />
          </div>
          <div className="container-clima">
            <ApiClima />
            <h3>Hoy parece un buen día para entrenar</h3>
          </div>
        </div>
      </div>

      <WhatsappContact />
    </>
  );
};

export default HomeUserPage;
