export const cambiarTituloPagina = (nombrePagina) => {
  switch (nombrePagina) {
    case "HomePage":
      document.title = "EnerGym";
      break;
    case "LoginPage":
      document.title = "Iniciar Sesión";
      break;
    case "RegisterPage":
      document.title = "Registro";
      break;
    case "PlanesPage":
      document.title = "Planes";
      break;

    case "AboutPage":
      document.title = "Sobre Nosotros";
      break;

    case "ContactPage":
      document.title = "Contacto";
      break;

    case "HomeAdminPage":
      document.title = "Admin EnerGym";
      break;

    case "PanelClases":
      document.title = "Panel de Clases";
      break;

    case "PanelUsuarios":
      document.title = "Panel de Usuarios";
      break;

    case "PanelTurnos":
      document.title = "Panel de Turnos";
      break;

    case "Turnero":
      document.title = "Turnos";
      break;

      case "VerTurnos":
      document.title = "Mis Turnos";
      break;

      case "HomeUserPage":
      document.title = "EnerGym";
      break;

    case "instalacionesPage":
      document.title = "Galeria";
      break;

    default:
      document.title = "ERROR";
      break;
  }
};
