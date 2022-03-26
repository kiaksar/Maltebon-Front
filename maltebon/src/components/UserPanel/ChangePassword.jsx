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
    console.log("call shod");
    await axios
      .post(makeURL(references.url_change_pass), {
        old_password: this.state.oldPass,
        new_password: this.state.oldPass,
      })
      .then((response) => {
        if (response.data.message == "Wrong password entered.") {
          document.getElementById("errors").innerHTML =
            "پسور وارد شده با پسور قبلی شما مطابقت ندارد";
        } else {
          window.alert("رمز شما با موفقیت تغییر کرد");
          // window.location.reload();
          this.props.changeProf();
        }
      })
      .catch((error) => {
        // window.alert("خطای سرور. لطفا دوباره تلاش کنید");
        // console.log(error.response.data.message);
        window.alert(error.response.data.message);
        if (error.response.data.message == "Wrong password entered.") {
          document.getElementById("errors").innerHTML =
            "پسور وارد شده با پسور قبلی شما مطابقت ندارد";
        } else if (error.response.status == 401) {
          message = error.response.data.message;
        } else {
          message = error.response.data;
        }
      });
    return message;
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
              />
            </Grid>
            <Grid item xs={12} lg={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  backgroundColor: theme.palette.primary.light,
                }}
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
