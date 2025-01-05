import axios from "axios";

const clientAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL_LOCAL}`, // Asegúrate de que esta variable tenga el valor correcto
});

// Interceptor de respuesta
clientAxios.interceptors.response.use(
  (response) => {
    // Aquí puedes manejar las respuestas exitosas si necesitas
    return response;
  },
  (error) => {
    // Aquí manejas los errores
    console.error("Error en Axios Response:", error);

    // Opcional: puedes personalizar los mensajes de error según el estado
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Error 401: No autorizado");
          break;
        case 403:
          console.error("Error 403: Acceso prohibido");
          break;
        case 404:
          console.error("Error 404: Recurso no encontrado");
          break;
        case 500:
          console.error("Error 500: Error interno del servidor");
          break;
        default:
          console.error(`Error ${error.response.status}:`, error.response.data);
      }
    } else if (error.request) {
      console.error("No hubo respuesta del servidor:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }

    // Siempre rechaza la promesa para manejar los errores en los llamados
    return Promise.reject(error);
  }
);

export default clientAxios;

export const configHeaders = {
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
};

export const configHeadersImg = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
