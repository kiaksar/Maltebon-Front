import React, { Component } from "react";
import { Avatar, Card, Grid, Paper } from "@material-ui/core";
class UserMiniBox extends Component {
  state = { name: "kiamt01" };
  render() {
    return (
      <div>
        <Card
          style={{ display: "inline-flex", backgroundColor: "transparent" }}
        >
          <Grid container>
            <Grid item style={{ padding: "1vh 1vw" }}>
              <Avatar
                style={{
                  width: "8vw",
                  height: "8vw",
                }}
              ></Avatar>
            </Grid>
            <Grid
              item
              style={{ padding: "1vh 1vw", display: "flex" }}
              alignItems="center"
            >
              <div
                style={{
                  fontSize: "30px",
                }}
              >
                {this.state.name}
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default UserMiniBox;
