import { Avatar, Switch, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import whois from "../../assets/unnamed.png";
import GitHub from "../../assets/GitHub-Mark.png";
import linkedin from "../../assets/Linkendin.png";
import { setPluginToken } from "../../Connections/Connection";

class EditTokens extends Component {
  state = {
    WhoIs: "",
    Linkedin: "",
    Github: "",
    TelegramIsActive: false,
    InstagramIsActive: false,
    GithubIsActive: false,
  };
  handleTelegramChange = async () => {
    await setPluginToken("-", "telegram").then((e) => {
      console.log(e);
      this.setState({ TelegramIsActive: !this.state.TelegramIsActive });
    });
  };
  handleInstagramChange = async () => {
    await setPluginToken("-", "instagram").then((e) => {
      console.log(e);
      this.setState({ InstagramIsActive: !this.state.InstagramIsActive });
    });
  };
  handleGithubChange = async () => {
    await setPluginToken("-", "github").then((e) => {
      console.log(e);
      this.setState({ GithubIsActive: !this.state.GithubIsActive });
    });
  };
  handleWhoisChange = async () => {
    await setPluginToken("at_EKRs0rSRoInDIuwtIxnTCvc1T8MCD", "whois").then((e) => {
      console.log(e);
    });
  };
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
              <TextField
                fullWidth
                onChange={(e) => {
                  this.setState({ WhoIs: e.target.value });
                  this.handleWhoisChange();
                }}
              />
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <Grid container>
            <Grid item lg={1} xs={1} md={1}>
              <Avatar src={linkedin} variant="square" />
            </Grid>
            <Grid
              item
              lg={2}
              xs={2}
              md={2}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Typography>Linkedin</Typography>
            </Grid>
            <Grid item lg={9} xs={9} md={9}>
              <TextField
                fullWidth
                onChange={(e) => {
                  this.setState({ Linkedin: e.target.value });
                }}
              />
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
              <Switch
                checked={this.state.GithubIsActive}
                onChange={this.handleGithubChange}
                name="Github"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <Grid container>
            <Grid item lg={1} xs={1} md={1}>
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png"
                variant="square"
              />
            </Grid>
            <Grid
              item
              lg={2}
              xs={2}
              md={2}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Typography>Telegram</Typography>
            </Grid>
            <Grid item lg={9} xs={9} md={9}>
              <Switch
                checked={this.state.TelegramIsActive}
                onChange={this.handleTelegramChange}
                name="Telegram"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <Grid container>
            <Grid item lg={1} xs={1} md={1}>
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
                variant="square"
              />
            </Grid>
            <Grid
              item
              lg={2}
              xs={2}
              md={2}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Typography>Instagram</Typography>
            </Grid>
            <Grid item lg={9} xs={9} md={9}>
              <Switch
                checked={this.state.InstagramIsActive}
                onChange={this.handleInstagramChange}
                name="Instagram"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default EditTokens;
