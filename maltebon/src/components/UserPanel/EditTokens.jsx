import { Avatar, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import whois from "../../assets/unnamed.png";
import GitHub from "../../assets/GitHub-Mark.png";
import maltego from "../../assets/images.png";

class EditTokens extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: "0.5vh" }}>
        <Typography
          variant="h3"
          style={{
            textAlign: "left",
            fontFamily: "Fredoka",
            fontWeight: "bold",
            paddingBottom: "5vh",
          }}
        >
          Your Tokens
        </Typography>
        <div style={{ paddingBottom: "2vh" }}>
          <Grid container>
            <Grid item lg={1} xs={1} md={1}>
              <Avatar src={whois} variant="square" />
            </Grid>
            <Grid
              item
              lg={2}
              xs={2}
              md={2}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Typography>who.is</Typography>
            </Grid>
            <Grid item lg={9} xs={9} md={9}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <Grid container>
            <Grid item lg={1} xs={1} md={1}>
              <Avatar src={maltego} variant="square" />
            </Grid>
            <Grid
              item
              lg={2}
              xs={2}
              md={2}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Typography>Maltego</Typography>
            </Grid>
            <Grid item lg={9} xs={9} md={9}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <Grid container>
            <Grid item lg={1} xs={1} md={1}>
              <Avatar src={GitHub} variant="square" />
            </Grid>
            <Grid
              item
              lg={2}
              xs={2}
              md={2}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Typography>Github</Typography>
            </Grid>
            <Grid item lg={9} xs={9} md={9}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default EditTokens;
