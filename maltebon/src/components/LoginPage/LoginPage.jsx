import { Grid, Paper, ThemeProvider, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Cookies from "universal-cookie";
import { Login } from "../../Connections/Connection";
import references from "../../assets/References.json";
import codeBG from "../pics/code.jpg";
import { theme } from "../Theme/theme";

axios.defaults.withCredentials = true;

function successfulLogin() {
  window.alert(references.alert_login_successful);
  window.location.replace("/");
}

function checkResponse(responseData) {
  console.log(responseData);
  // setLoading(false);
  switch (responseData) {
    case "successful login":
      successfulLogin();
      break;
    case "already logged in":
      window.alert(references.err_already_loggedIn);
    default:
      // setError();
      // setLoginFailed(true);
      break;
  }
}
const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${codeBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  },
};
class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };
  handleLogin = () => {
    Login(this.state.username, this.state.password).then((response) => {
      checkResponse(response);
      console.log("Login response", response);
    });
  };
  render() {
    return (
      <form style={{ minHeight: "80vh" }}>
        <ThemeProvider theme={theme}>
          <Grid container
          direction="column-reverse"
          justify="flex-end"
          alignItems="right"
          style={styles.heroContainer}>

          </Grid>
          <Paper
            elevation={10}
            style={{
              display: "inline-flex",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              padding: "1vw",
            }}
          >
            <Grid container spacing={1} direction={"column"}>
              <Grid
                item
                lg={12}
                xs={12}
                md={12}
                style={{ margin: "auto", textAlign: "center" }}
              >
                <Grid container spacing={1} direction={"column"}>
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        // fontSize: "2vh",
                        fontFamily: "Fredoka",
                      }}
                    >
                      <Typography
                        variant="h4"
                        style={{ fontFamily: "Fredoka", fontWeight: "bold" }}
                      >
                        Log in
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <TextField
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
                      }}
                      id="outlined-basic"
                      label="Username"
                      variant="filled"
                      style={{width : "13vw"}}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <TextField
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                      id="outlined-basic"
                      label="Password"
                      variant="filled"
                      type="password"
                      style={{width : "13vw"}}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={this.handleLogin}
                      type="button"
                      style={{ width: "100%", color: theme.palette.secondary.textColor, background: theme.palette.secondary.main}}
                    >
                      Log in
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </form>
    );
  }
}

export default LoginPage;
<div></div>;
