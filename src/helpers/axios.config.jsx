import axios from "axios";

const clientAxios = axios.create({
  baseURL: `https://energymbackend.vercel.app/`,
});

export default clientAxios;

export const configHeaders = {
  headers: {
    "content-type": "application/json",
    auth: `${JSON.parse(sessionStorage.getItem("token"))}`,
  },
};

export const configHeadersImg = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
