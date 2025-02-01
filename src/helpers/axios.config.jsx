import axios from "axios";

const clientAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL_LOCAL}`,
});

// Nuevo interceptor para las peticiones
clientAxios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      // Limpiamos las comillas extras del token
      const cleanToken = token.replace(/['"]+/g, "");
      config.headers.Authorization = `Bearer ${cleanToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta (mantener el que ya tenías)
clientAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error en Axios Response:", error);

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

    return Promise.reject(error);
  }
);

// Función helper para obtener headers limpios
const getCleanToken = () => {
  const token = sessionStorage.getItem("token");
  return token ? token.replace(/['"]+/g, "") : "";
};

// Modificar los exports para usar el token limpio
export const configHeaders = {
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${getCleanToken()}`,
  },
};

export const configHeadersImg = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default clientAxios;
