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
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  margin: 10px;
`;

const StyledMedia = styled(Media)`
  height: 600px;
  width: 400px;
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
})``;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OtherInfo = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Overview = styled(CardText)`
  flex: 4;
  font-size: 20px;
`;

const Title = styled(CardText)`
  font-size: 26px;
  text-align: center;
`;

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
