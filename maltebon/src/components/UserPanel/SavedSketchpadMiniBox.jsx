import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Typography } from "@material-ui/core";
class SavedSketchpadMiniBox extends Component {
  state = {
    image: "",
    link: "",
    isFavorite: false,
  };
  render() {
    return (
      <Card onClick={() => {
        window.location.replace("/Mysketchs/"+this.props.link);
      }}
      style={{border:"2px solid #9ef01a", background:'transparent'}}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h4" component="h2" style={{color:'#9ef01a'}}>
              {this.props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    );
  }
}

export default SavedSketchpadMiniBox;
