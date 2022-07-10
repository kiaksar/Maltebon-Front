import { Grid, Paper, ThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Register, checkResponse } from "../../Connections/Connection";
import { theme } from "../Theme/theme";
import codeBG from "../pics/code.jpg";


const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${codeBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  },
};
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
      <form style={{ minHeight: "80vh" }}>
        <ThemeProvider theme={theme}>
        <Grid
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
              background:'#222'
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
                      <Typography
                        variant="h4"
                        style={{ fontFamily: "Fredoka", fontWeight: "bold", color:'#9ef01a'}}
                      >
                        Register
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
                      data-testid="signup-usernameBox"
                      style={{width : "300px", background:'#9ef01a', marginLeft:'10px', marginRight:'10px', borderRadius:10}}
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
                      data-testid="signup-passwordBox"
                      style={{width : "300px", background:'#9ef01a', marginLeft:'10px', marginRight:'10px', borderRadius:10}}
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
                      type="password"
                      data-testid="signup-confPasswordBox"
                      style={{width : "300px", background:'#9ef01a', marginLeft:'10px', marginRight:'10px', borderRadius:10}}
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
                      type="email"
                      data-testid="signup-emailBox"
                      style={{width : "300px", background:'#9ef01a', marginLeft:'10px', marginRight:'10px', borderRadius:10}}
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
                      title="Sign up"
                      data-testid="signup-signupButton"
                      style={{ width: "94%", color: theme.palette.secondary.textColor, background: theme.palette.secondary.main , marginLeft:'10px', marginRight:'10px', borderRadius:10}}
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
