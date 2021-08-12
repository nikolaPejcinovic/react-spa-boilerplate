import { getValue } from "utils";
import apiConfig from "./config";

const baseURL = `${process.env.REACT_APP_APIGATEWAY_ENDPOINT}`;

const api = apiConfig(baseURL);

export async function getAuthData(redirectUri, nonce, state, realm) {
  const { data } = await api.post("/es/authenticate-oidc", {
    redirect_uri: redirectUri,
    nonce,
    state,
    realm
  });

  return data;
}

export async function getAuthRedirectUrl() {
  const { data } = await api.get("/es/prepare-oidc?realm=cloud-oidc2");

  return data;
}

export async function getUserData() {
  const { data } = await api.get("/es/authenticate");

  return data;
}

export async function logout() {
  const token = getValue("access_token");
  const refresh_token = getValue("refresh_token");

  const { data } = await api.post("/es/logout-oidc", {
    token,
    refresh_token
  });

  return data;
}
