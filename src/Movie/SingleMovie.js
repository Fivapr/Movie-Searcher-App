import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import {
  Card,
  CardTitle,
  MediaOverlay,
  Media,
  Button,
  CardText
} from "react-md";
import propTypes from "prop-types";

const mapStateToProps = state => ({
  currentMovie: state.movieReducer.currentMovie
});

const mapDispatchToProps = dispatch => ({
  fetchSingleMovie: movieId => {
    dispatch(actions.FETCH_SINGLE_MOVIE(movieId));
  }
});

class SingleMovie extends Component {
  componentDidMount() {
    this.props.fetchSingleMovie(this.props.location.pathname.slice(8));
  }

  render() {
    return (
      <Card style={{ margin: 10 }} className="movie__card">
        <Media style={{ height: 1500, width: 1000 }}>
          <img
            style={{
              width: "100%",
              height: "100%"
            }}
            src={
              "http://image.tmdb.org/t/p/original/" +
              this.props.currentMovie.poster_path
            }
            alt="Movie poster"
          />
          <MediaOverlay>
            <CardTitle
              title={this.props.currentMovie.title}
              subtitle={
                "blya pochemy ne slicitsya, ya zaebalsya" +
                this.props.currentMovie.release_date
              }
            >
              <Button className="md-cell--right" icon>
                star_outline
              </Button>
            </CardTitle>
          </MediaOverlay>
        </Media>
        <CardText>
          <p>{this.props.currentMovie.overview}</p>
        </CardText>
      </Card>
    );
  }
}

SingleMovie.propTypes = {
  currentMovie: propTypes.object,
  fetchSingleMovie: propTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
