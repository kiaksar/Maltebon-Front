import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid, IconButton, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";
import references from "../../assets/References.json";
import axios from "axios";
import { makeURL } from "../../Connections/Common";
import { theme } from "../Theme/theme";

class ChangePassword extends Component {
  state = { oldPass: "", newPass: "", confirmPass: "" };
  changePassword = async () => {
    let message = "";
    // let oldPass = await this.state.oldPass;
    // let newPass = await this.state.newPass;
    if (this.state.confirmPass === this.state.newPass) {
      await axios
        .post(makeURL(references.url_change_pass), {
          old_password: this.state.oldPass,
          new_password: this.state.newPass,
        })
        .then((response) => {
          if (response.data.message == "Wrong password entered.") {
            document.getElementById("errors").innerHTML =
              "Old password is incorrect";
          } else {
            // window.alert("Password changed successfully");
            this.props.openAlert(
              true,
              "Password changed successfully",
              "success"
            );
            // window.location.reload();
            this.props.changeProf();
          }
        })
        .catch((error) => {
          // window.alert("خطای سرور. لطفا دوباره تلاش کنید");
          // console.log(error.response.data.message);
          // window.alert(error.response.data.message);
          this.props.openAlert(true, error.response.data.message, "error");
          if (error.response.data.message == "Wrong password entered.") {
            this.props.openAlert(true, "Wrong password entered", "error");
            document.getElementById("errors").innerHTML =
              "Old password is incorrect";
          } else if (error.response.status == 401) {
            message = error.response.data.message;
          } else {
            message = error.response.data;
          }
        });
      return message;
    } else {
      this.props.openAlert(true, "Passwords dont match", "warning");
    }
  };
  render() {
    return (
      <Grid container>
        <Grid item>
          <IconButton onClick={this.props.changeProf}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                label="Old password"
                style={{ width: "100%" }}
                value={this.state.oldPass}
                onChange={(e) => {
                  this.setState({ oldPass: e.target.value });
                }}
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                label="New password"
                style={{ width: "100%" }}
                value={this.state.newPass}
                onChange={(e) => {
                  this.setState({ newPass: e.target.value });
                }}
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                label="Confirm password"
                style={{ width: "100%" }}
                value={this.state.confirmPass}
                onChange={(e) => {
                  this.setState({ confirmPass: e.target.value });
                }}
                error={this.state.newPass !== this.state.confirmPass}
                helperText={
                  this.state.newPass !== this.state.confirmPass
                    ? "New password and confirmation should be the same"
                    : ""
                }
                type="password"
              />
            </Grid>
            <Grid item xs={12} lg={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  backgroundColor: theme.palette.primary.light,
                }}
                title="Change password"
                onClick={this.changePassword}
              >
                Change password
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ChangePassword;
