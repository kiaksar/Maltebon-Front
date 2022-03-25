import { Grid, Paper, ThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Register, checkResponse } from "../../Connections/Connection";
import { theme } from "../Theme/theme";

class SignupPage extends Component {
  state = {
    username: "",
    password: "",
    confPassword: "",
    email: "",
  };
  handleRegister = () => {
    Register(this.state.email, this.state.username, this.state.password).then(
      (message) => {
        console.log("Register message", message);
      }
    );
  };
  render() {
    return (
      <form>
        <ThemeProvider theme={theme}>
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
                      Sign Up
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
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <TextField
                      onChange={(e) => {
                        this.setState({ confPassword: e.target.value });
                      }}
                      id="outlined-basic"
                      label="Conf-Password"
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
                        this.setState({ email: e.target.value });
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
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={this.handleRegister}
                      type="button"
                      color="primary"
                      style={{ width: "100%" }}
                    >
                      Sign Up
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

export default SignupPage;
