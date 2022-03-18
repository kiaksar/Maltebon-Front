import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core";
// import Profile from "./components/UserPanel/Profile";
// import { theme, useStyles } from "./components/Theme/theme.jsx";
// import Header from "./components/Header/Header";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import LandingPage from "./components/LandingPage/LandingPage.jsx";
import LoginPage from "./components/LoginPage/LoginPage";
import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: "flex",
//     height: 224,
//   },
//   tabs: {
//     borderLeft: `1px solid ${theme.palette.divider}`,
//   },
// }));

function App() {
  // const Theme = useStyles(theme);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<LandingPage/>}
        ></Route>
        <Route element ={<LoginPage/>} path="/login" exact="true"/>
        <Route element ={<SignupPage/>} path="/register" exact="true"/>
        {/* <Route path="/Landing" element={<LandingPage />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;