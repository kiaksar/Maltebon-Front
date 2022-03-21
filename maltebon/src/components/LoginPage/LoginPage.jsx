import { Grid, Paper } from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Cookies from "universal-cookie";
import { Login } from "../../Connections/Connection";
import references from "../../assets/References.json";

axios.defaults.withCredentials = true;

function successfulLogin() {
  window.alert(references.alert_login_successful);
  window.location.reload();
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

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };
  handleLogin = () => {
    Login(this.state.username, this.state.password).then((response) => {
      checkResponse(response);
    });
  };
  render() {
    return (
      <form>
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
                  <div style={{ fontWeight: "bold", fontSize: "2vh" }}>
                    Log in
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
                    label="Email"
                    variant="filled"
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
                  />
                </Grid>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  md={12}
                  style={{ margin: "auto", textAlign: "center", width: "100%" }}
                >
                  <Button
                    onClick={this.handleLogin}
                    type="button"
                    color="primary"
                    style={{ width: "100%" }}
                  >
                    Log in
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </form>
    );
  }
}

export default LoginPage;
<div></div>;
