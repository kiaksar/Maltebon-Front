import React, { Component } from "react";
import { Avatar, Grid, TextField } from "@material-ui/core";
class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Avatar />
                </Grid>
                <Grid item>
                  <input type="button" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField variant="filled" label="Username" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="filled" label="Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="filled" label="Email" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default EditProfile;
