import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import propTypes from "prop-types";
import { Flex } from "../Style/MoviesRender";

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies
});

class Movies extends React.Component {
  render() {
    return (
      <Flex>
        {this.props.movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </Flex>
    );
  }
}

Movies.propTypes = {
  movies: propTypes.array
};

export default connect(mapStateToProps, null)(Movies);
