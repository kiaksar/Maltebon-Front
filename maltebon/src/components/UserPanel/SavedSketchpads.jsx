import React, { Component } from "react";
import SavedSketchpadMiniBox from "./SavedSketchpadMiniBox";
import { Grid } from "@material-ui/core";
class SavedSketchpads extends Component {
  state = { sketchpads: [1, 2, 3] };
  render() {
    return (
      <Grid container spacing={2}>
        {this.state.sketchpads.map((s) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <SavedSketchpadMiniBox />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default SavedSketchpads;
