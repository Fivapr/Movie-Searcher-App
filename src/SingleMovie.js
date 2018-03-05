import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

const mapStateToProps = state => ({
  currentMovie: state.reducer.currentMovie
});


class SingleMovie extends Component {
  render(){
    return{
      <div className="SingleMovie">
        <img src=`http://image.tmdb.org/t/p/original//${currentMovie.backdrop_path}`
      </div>
    };
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
