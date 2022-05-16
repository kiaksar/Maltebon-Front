import React, { Component } from "react";
import {
  Box,
  Grid,
  Hidden,
  Paper,
  Typography,
  Toolbar,
  AppBar,
  TextField,
  Avatar,
  ThemeProvider,
} from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import Typed from "react-typed";
import Button from "@material-ui/core/Button";
import arshia from "../pics/arshia.jpg";
import kia from "../pics/kia.jpg";
import arda from "../pics/arda.jpg";
import amir from "../pics/amir.png";
import telegram from "../pics/telegram.png";
import instagram from "../pics/instagram.png";
import gmail from "../pics/gmail.png";
import { theme } from "../Theme/theme";

class Footer extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column-reverse"
          justify="flex-end"
          alignItems="right"
        >
          <Grid item>
            <Box component="nav">
              <AppBar position="static" style={{ background: "#222" }}>
                <Toolbar>
                  <Grid container>
                    <Grid item lg={12} xs={12} md={12}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: "4vh",
                          margin: "5vh 5vw",
                        }}
                      >
                        about us
                      </Typography>
                    </Grid>
                    <Paper
                      elevation={10}
                      style={{
                        padding: "0 3vw",
                        width: "100%",
                        background: theme.palette.secondary.main,
                      }}
                    >
                      <Grid container direction="column" alignItems="center">
                        <Grid item lg={2} xs={4} md={2}>
                          <Paper
                            elevation={10}
                            style={{ background: theme.palette.primary.black }}
                          >
                            <Typography
                              style={{
                                fontWeight: "bold",
                                fontSize: "3vh",
                                margin: "5vh 5vw",
                                color: "white",
                              }}
                            >
                              Carbon Studio:
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <Grid item lg={3} xs={6} md={6}>
                              <Typography
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "2vh",
                                  margin: "5vh 5vw",
                                  color: theme.palette.primary.contrastText,
                                  margin: "0 10vw",
                                }}
                              >
                                <Avatar
                                  alt="Remy Sharp"
                                  src={arshia}
                                  style={{ width: "8vh", height: "8vh" }}
                                />
                                Arshia Pain
                              </Typography>
                            </Grid>
                            <Grid item lg={3} xs={6} md={6}>
                              <Typography
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "2vh",
                                  margin: "5vh 5vw",
                                  color: theme.palette.primary.contrastText,
                                  margin: "0 10vw",
                                }}
                              >
                                <Avatar
                                  alt="Remy Sharp"
                                  src={amir}
                                  style={{ width: "8vh", height: "8vh" }}
                                />
                                Amir Smart
                              </Typography>
                            </Grid>
                            <Grid item lg={3} xs={6} md={6}>
                              <Typography
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "2vh",
                                  margin: "5vh 5vw",
                                  color: theme.palette.primary.contrastText,
                                  margin: "0 10vw",
                                }}
                              >
                                <Avatar
                                  alt="Remy Sharp"
                                  src={kia}
                                  style={{ width: "8vh", height: "8vh" }}
                                />
                                Kia Loko
                              </Typography>
                            </Grid>
                            <Grid item lg={3} xs={6} md={6}>
                              <Typography
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "2vh",
                                  margin: "5vh 5vw",
                                  color: theme.palette.primary.contrastText,
                                  margin: "0 10vw",
                                }}
                              >
                                <Avatar
                                  alt="Remy Sharp"
                                  src={arda}
                                  style={{ width: "8vh", height: "8vh" }}
                                />
                                Arda Sag
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                    <br />
                    <Paper
                      elevation={10}
                      style={{
                        padding: "3vh 3vw",
                        width: "100%",
                        background: "green",
                      }}
                    >
                      <Grid container direction="column" alignItems="center">
                        <Grid item>
                          <Grid container direction="row">
                            <Grid item lg={4} xs={4} md={4}>
                              <Avatar
                                alt="Remy Sharp"
                                src={telegram}
                                style={{ margin: "0 10vw" }}
                              />
                            </Grid>
                            <Grid item lg={4} xs={4} md={4}>
                              <Avatar
                                alt="Remy Sharp"
                                src={instagram}
                                style={{ margin: "0 10vw" }}
                              />
                            </Grid>
                            <Grid item lg={4} xs={4} md={4}>
                              <Avatar
                                alt="Remy Sharp"
                                src={gmail}
                                style={{ margin: "0 10vw" }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                    <br />
                  </Grid>
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default Footer;
