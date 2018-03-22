import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import propTypes from "prop-types";
import { CardTitle, MediaOverlay, CardText } from "react-md";
import {
  Container,
  CardContainer,
  StyledCard,
  StyledMedia,
  Poster,
  StyledButton,
  InfoContainer,
  OtherInfo,
  Overview,
  Title
} from "../Style/SingleMovie";

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
    const { currentMovie: movie } = this.props;

    return (
      <Container>
        <StyledCard>
          <CardContainer>
            <StyledMedia>
              <Poster
                onClick={this.linkToSingleMovie}
                src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
              />
              <MediaOverlay>
                <CardTitle title={movie.title} subtitle={movie.release_date}>
                  <StyledButton onClick={this.handleFavoriteClick}>
                    star_outline
                  </StyledButton>
                </CardTitle>
              </MediaOverlay>
            </StyledMedia>

            <InfoContainer>
              <OtherInfo>
                <Title>
                  <p>{movie.original_title}</p>
                </Title>
                <CardText>
                  <p>Average vote: {movie.vote_average}</p>
                </CardText>
                <CardText>
                  <p>Original language: {movie.original_language}</p>
                </CardText>
                <CardText>
                  <p>Revenue: {movie.revenue}</p>
                </CardText>
                <CardText>
                  <p>Budget: {movie.budget}</p>
                </CardText>
                <CardText>
                  <p>tagline: {movie.tagline}</p>
                </CardText>
              </OtherInfo>
              <Overview>{movie.overview}</Overview>
            </InfoContainer>
          </CardContainer>
        </StyledCard>
      </Container>
    );
  }
}

// <CardText>
//   <p>{movie.spoken_languages}</p>
// </CardText>
// <CardText>
//   <p>{movie.production_companies}</p>
// </CardText>
// <CardText>
//   <p>{movie.production_countries}</p>
// </CardText>

SingleMovie.propTypes = {
  currentMovie: propTypes.object,
  fetchSingleMovie: propTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
