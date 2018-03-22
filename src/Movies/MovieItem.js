import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { ADD_TO_FAVORITE } from "../Favorite/Actions";
import { connect } from "react-redux";
import { CardTitle, MediaOverlay } from "react-md";
import {
  StyledCard,
  StyledMedia,
  Poster,
  StyledButton
} from "../Style/MovieItem";

const mapStateToProps = state => ({
  sessionId: state.authReducer.sessionId
});

const mapDispatchToProps = dispatch => ({
  addToFavorite: (sessionId, movieId) => {
    dispatch(ADD_TO_FAVORITE(sessionId, movieId));
  }
});

class MovieItem extends Component {
  linkToSingleMovie = () => {
    this.props.history.push(`/movies/${this.props.movie.id}`);
  };

  handleFavoriteClick = () => {
    if (this.props.sessionId) {
      this.props.addToFavorite(this.props.sessionId, this.props.movie.id);
    } else {
      this.props.history.push(`/auth`);
    }
  };

  render() {
    const { movie } = this.props;
    return (
      <StyledCard>
        <StyledMedia>
          <Poster
            onClick={this.linkToSingleMovie}
            src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
          />
          <MediaOverlay>
            <CardTitle
              title={movie.title}
              subtitle={movie.release_date.substring(0, 4)}
            >
              <StyledButton onClick={this.handleFavoriteClick}>
                star_outline
              </StyledButton>
            </CardTitle>
          </MediaOverlay>
        </StyledMedia>
      </StyledCard>
    );
  }
}

MovieItem.propTypes = {
  movie: propTypes.object
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieItem)
);
