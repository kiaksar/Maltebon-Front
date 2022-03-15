import references from "../assets/References.json";
import Cookies from "universal-cookie";
export const cookie = new Cookies();
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};
export const makeURL = (URL) => {
  return references.url_address + URL;
};
export const persianDate = (e) => {
  return new Date(e.replace("-", "/")).toLocaleString("fa-IR");
};
