import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserMiniBox from "./components/UserPanel/UserMiniBox";
import EditProfile from "./components/UserPanel/EditProfile";
import Profile from "./components/UserPanel/Profile";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import LandingPage from './components/LandingPage/LandingPage';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
