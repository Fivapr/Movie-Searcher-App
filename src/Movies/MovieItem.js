import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, CardTitle, MediaOverlay, Media, Button } from "react-md";
import propTypes from "prop-types";
import { ADD_TO_FAVORITE } from "../Favorite/Actions";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 10px;
`;

const StyledMedia = styled(Media)`
  height: 345px;
  width: 230px;
`;

const Poster = styled.img.attrs({
  alt: "Movie poster"
})`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledButton = styled(Button).attrs({
  className: "md-cell--right",
  icon: true
});

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
    this.props.addToFavorite(this.props.sessionId, this.props.movie.id);
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
