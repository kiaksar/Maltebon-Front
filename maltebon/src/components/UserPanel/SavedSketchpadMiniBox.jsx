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
  
  render() {
    return (
      <Card onClick={() => {
        window.location.replace("/Mysketchs/"+this.props.link);
      }}>
        <CardActionArea>
          <CardMedia image={this.props.image} />
          <CardContent>
            <Typography variant="h4" component="h2">
              {this.props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton>
            {this.props.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
