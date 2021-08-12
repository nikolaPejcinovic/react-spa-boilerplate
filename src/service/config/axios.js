import axios from "axios";

// Utils
import { getValue } from "utils";

const config = {
  validateStatus: status => status >= 200 && status < 300,
  headers: {
    Accept: "*",
    "Content-Type": "application/json; charset=utf-8"
  }
};

const api = axios.create(config);

const apiConfig = baseURL => {
  api.interceptors.request.use(
    config => {
      const token = getValue('access_token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.baseURL = baseURL;

      if (config.method === "patch") {
        config.headers["Content-Type"] = "multipart/form-data";
      }

      return config;
    },
    error => Promise.reject(error)
  );

  return api;
};

export default apiConfig;
