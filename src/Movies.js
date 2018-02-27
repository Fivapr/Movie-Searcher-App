import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

const mapStateToProps = state => ({
  movies: state.reducer.movies
});

class Movies extends Component {
  render() {
    let movieItems = this.props.movies.map(movie => {
      return <MovieItem movie={movie} />;
    });
    return <div className="Movies">{movieItems}</div>;
  }
}

export default connect(mapStateToProps, null)(Movies);
