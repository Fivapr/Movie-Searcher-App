import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, CardTitle, MediaOverlay, Media, Button } from "react-md";
import propTypes from "prop-types";

class MovieItem extends Component {
  linkToSingleMovie = () => {
    this.props.history.push(`/movies/${this.props.movie.id}`);
  };

  render() {
    return (
      <Card
        style={{ margin: 10 }}
        className="movie__card"
        onClick={this.linkToSingleMovie}
      >
        <Media style={{ height: 450, width: 300 }}>
          <img
            style={{
              width: "100%",
              height: "100%"
            }}
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

MovieItem.propTypes = {
  movie: propTypes.object
};

export default withRouter(MovieItem);
