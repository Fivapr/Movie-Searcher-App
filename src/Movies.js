import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { Grid, Cell } from "react-md";

const mapStateToProps = state => ({
  movies: state.reducer.movies
});

class Movies extends Component {
  render() {
    let movieItems = this.props.movies.map(movie => {
      console.log(movie);
      return <MovieItem movie={movie} />;
    });
    return <Grid className="Movies">{movieItems}</Grid>;
  }
}

export default connect(mapStateToProps, null)(Movies);
