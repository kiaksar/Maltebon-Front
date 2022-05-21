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

export function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}
