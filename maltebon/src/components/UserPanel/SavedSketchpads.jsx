import React, { Component } from "react";
import SavedSketchpadMiniBox from "./SavedSketchpadMiniBox";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { makeURL } from "../../Connections/Common";

class SavedSketchpads extends Component {
  state = { sketchpads: [1, 2, 3] };
  async componentDidMount() {
      console.log(this.props.classes);
      await axios
        .get(makeURL("/sketchs"))
        .then((response) => {
          var sketchs = response.data[0]
          console.log("This is sketchs", sketchs );
          // sketchs.forEach(element => {
          //   console.log("sketchs foreach" , element)
          // });
          this.setState({
            sketchpads: sketchs
          });
        })
        .catch((error) => {
          console.log("Error in getting sketchs", error);
        });
  }
  
  render() {
    return (
      <Grid container spacing={2}>
        {this.state.sketchpads.map((s) => {
          {
            console.log("sketchs foreach" , s.name , s.image , s.token)
          }
          return (
            
            
            <Grid item xs={12} md={6} lg={4}>
              <SavedSketchpadMiniBox title={s.name} image={s.image} link={s.token} isFavorite={false}/>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default SavedSketchpads;
