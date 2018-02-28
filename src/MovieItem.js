import React, { Component } from "react";
import {
  NavigationDrawer,
  Card,
  CardTitle,
  CardText,
  Slider,
  MediaOverlay,
  Button,
  Media
} from "react-md";

const imgStyle = {
  maxWidth: "100%",
  height: "auto"
};

class MovieItem extends Component {
  render() {
    return (
      <Card className="movie__card md-cell md-cell--2 md-cell--2-tablet">
        <Media style={{}}>
          <img
            style={imgStyle}
            src={
              "http://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path
            }
            alt="Movie poster"
          />
          <MediaOverlay>
            <CardTitle
              title={this.props.movie.title}
              subtitle={this.props.movie.release_date.substring(0, 4)}
            >
              <Button className="md-cell--right" icon>
                star_outline
              </Button>
            </CardTitle>
          </MediaOverlay>
        </Media>
      </Card>
    );
  }
}

export default MovieItem;
