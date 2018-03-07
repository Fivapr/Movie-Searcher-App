import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import propTypes from "prop-types";

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies
});

let flex = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around"
};

class Movies extends React.Component {
  render() {
    return (
      <div style={flex}>
        {this.props.movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: propTypes.array
};

export default connect(mapStateToProps, null)(Movies);
