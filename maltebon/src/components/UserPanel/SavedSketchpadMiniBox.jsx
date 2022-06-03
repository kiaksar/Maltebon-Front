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
    title: "test",
    link: "",
    isFavorite: false,
  };
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia image={this.state.image} />
          <CardContent>
            <Typography variant="h4" component="h2">
              {this.state.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton>
            {this.state.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default SavedSketchpadMiniBox;
