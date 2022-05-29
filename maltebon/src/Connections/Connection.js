import axios from "axios";
import references from "../assets/References.json";
import { setUserSession, cookie, getUser } from "./Common";
import Cookies from "universal-cookie";
import { makeURL } from "./Common";

export const Logout = async () => {
  cookie.remove("x-access-token");
  // send some data to backend to remove cookie
  await axios
    .post(makeURL(references.url_logout), { cookie: cookie })
    .then((response) => {
      cookie.remove("x-access-token");
    })
    .catch((error) => {
      console.log("error in logout");
    });
};

export const Register = async (email, username, password) => {
  let message = "";
  await axios
    .post(makeURL(references.url_register), {
      email: email,
      username: username,
      password: password,
    })
    .then((response) => {
      // register success
      setUserSession(response.data.token, response.data.user);
      message = "successful register";
    })
    .catch((error) => {
      // register failed
      console.log(error, error.response.data);
      if (error.response.status == 401) {
        message = error.response.data.message;
      } else {
        message = error.response.data;
      }
    });
  return message;
};
export const Login = async (username, password) => {
  let message = "";
  if (cookie.get("x-access-token") !== undefined) {
    message = "already logged in";
  } else {
    await axios
      .post(makeURL(references.url_login), {
        username: username,
        password: password,
      })
      .then((response) => {
        // login success
        setUserSession(response.data.token, username);
        var today = new Date();
        var expirationDate = new Date();
        expirationDate.setDate(today.getDate() + 1);
        cookie.set("x-access-token", response.data.token, {
          path: "/",
          expires: expirationDate,
        }); // add expire
        message = "successful login";
      })
      .catch((error) => {
        // login faild
        if (error.response.status === 401) {
          message = error.response.data.message;
        } else {
          message = error.response.data;
        }
      });
  }
  return message;
};
export const EditBio = async (bio) => {
  let message = "";
  await axios
    .post(makeURL(references.url_change_bio), {
      bio: bio,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error, error.response.data);
      if (error.response.status == 401) {
        message = error.response.data.message;
      } else {
        message = error.response.data;
      }
    });
  return message;
};
export const EditDob = async (dob) => {
  let message = "";
  await axios
    .post(makeURL(references.url_change_dob), {
      dob: dob,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error, error.response.data);
      if (error.response.status == 401) {
        message = error.response.data.message;
      } else {
        message = error.response.data;
      }
    });
  return message;
};

export const EditName = async (profile_name) => {
  let message = "";
  await axios
    .post(makeURL(references.url_change_name), {
      profile_name: profile_name,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error, error.response.data);
      if (error.response.status == 401) {
        message = error.response.data.message;
      } else {
        message = error.response.data;
      }
    });
  return message;
};
export const GetProfile = async () => {
  await axios
    .get(makeURL("/account/profile"))
    .then((response) => {
      console.log("This is profile", response);
      return response;
    })
    .catch((error) => {
      console.log("Error in getting profile info", error);
      return error;
    });
};

export const getGithubInfo = async (username) => {
  let message = "";

  await axios
    .post(makeURL(references.url_github), {
      param1: username,
      param2: "-",
    })
    .then((response) => {
      message = response.data.message;
    })
    .catch((error) => {
      message = false;
    });

  return message;
};
export const getInstagramInfo = async (username) => {
  let message = "";

  await axios
    .post(makeURL(references.url_instagram), {
      param1: username,
      param2: "-",
    })
    .then((response) => {
      message = response.data.message;
    })
    .catch((error) => {
      message = false;
    });

  return message;
};
export const getTelegramInfo = async (username) => {
  let message = "";

  await axios
    .post(makeURL(references.url_telegram), {
      param1: username,
      param2: "-",
    })
    .then((response) => {
      message = response.data.message;
    })
    .catch((error) => {
      message = false;
    });

  return message;
};
export const getLinkedinInfo = async (username) => {
  let message = "";

  await axios
    .post(makeURL(references.url_linkedin), {
      param1: username,
      param2: "-",
    })
    .then((response) => {
      message = response.data.message;
    })
    .catch((error) => {
      message = false;
    });

  return message;
};
export const getWhoisInfo = async (username) => {
  let message = "";

  await axios
    .post(makeURL(references.url_whois), {
      param1: username,
      param2: "-",
    })
    .then((response) => {
      message = response.data.message;
    })
    .catch((error) => {
      message = false;
    });

  return message;
};
export const setPluginToken = async (token, type) => {
  let message = "";

  await axios
    .post(makeURL(references.url_setToken), {
      param1: token,
      p_name: type,
    })
    .then((response) => {
      message = response.data.message;
    })
    .catch((error) => {
      message = false;
    });

  return message;
};
