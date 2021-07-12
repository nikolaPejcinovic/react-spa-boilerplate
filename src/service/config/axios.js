import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_API_PATH,
  validateStatus: (status) => status >= 200 && status < 300,
  headers: {
    Accept: "*",
    "Content-Type": "application/json; charset=utf-8",
  },
};

const api = axios.create(config);

api.interceptors.request.use(
  (config) => {
    if (config.method === "patch") {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
