import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Grid,
} from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { theme } from "../Theme/theme.jsx";

class Navbar extends Component {
  state = {};
  handleLogin = () => {
    window.location.replace("/login");
  };
  handleSignup = () => {
    window.location.replace("/register");
  };
  render() {
    return (
      <Box component="nav">
        <AppBar
          position="static"
          style={{ background: theme.palette.primary.black }}
        >
          <Toolbar>
            <Grid container>
              <Grid item lg={"1vw"} xs={"1vw"} md={"1vw"} />
              <Grid item lg={"8vw"} xs={"8vw"} md={"8vw"}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "10vh",
                    margin: "0 5vw",
                  }}
                >
                  Maltebon
                </Typography>
              </Grid>
              <Grid
                item
                lg={"1vw"}
                xs={"1vw"}
                md={"1vw"}
                style={{ margin: "0 15vw" }}
              />
              <Grid item lg={"1vw"} xs={"1vw"} md={"1vw"}>
                <Button
                  onClick={this.handleLogin}
                  type="button"
                  variant="contained"
                  style={{
                    position: "relative",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: "0 5vw",
                    fontWeight: "bold",
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    padding: "1.5vh 2vw",
                  }}
                >
                  Log in
                </Button>
              </Grid>
              <Grid item lg={"1vw"} xs={"1vw"} md={"1vw"}>
                <Button
                  onClick={this.handleSignup}
                  type="button"
                  variant="contained"
                  style={{
                    position: "relative",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: "0 1vw",
                    fontWeight: "bold",
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    padding: "1.5vh 2vw",
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
