import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    return (
      <li className="movie">
        <b>{this.props.movie.title}</b>
      </li>
    );
  }
}

export default MovieItem;
