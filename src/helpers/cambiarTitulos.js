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

    case "HomeUserPage":
      document.title = "EnerGym";
      break;

    case "Turnero":
      document.title = "Turnos";
      break;

    default:
      document.title = "ERROR";
      break;
  }
};
