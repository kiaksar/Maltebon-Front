import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid, IconButton, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";

class ChangePassword extends Component {
  state = { oldPass: "", newPass: "", confirmPass: "" };
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
                  this.setState({ oldPass: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                }}
                onClick={this.props.changePass}
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
