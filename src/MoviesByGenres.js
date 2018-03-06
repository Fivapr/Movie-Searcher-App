import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, MediaOverlay, Media, Button } from "react-md";
import * as actions from "./Actions";
import MoviesRender from "./MoviesRender";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: (ids, page = 1) => {
    dispatch(actions.FETCH_BY_GENRES(ids, page));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  }
});

const mapStateToProps = state => ({
  genres: state.reducer.genres
});

class MoviesByGenres extends Component {
  constructor() {
    super();
    this.state = {
      genres: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      genres: nextProps.genres
    });
  }

  componentDidMount() {
    this.props.fetchGenres();
    let genrenames = this.props.location.pathname.slice(8).split("&");

    let selectedGenres = this.state.genres.filter(genre => {
      return genrenames.includes(genre.name);
    });
    console.log(selectedGenres);
    let selectedGenresIds = selectedGenres.map(genre => genre.id);
    this.props.fetchByGenres(selectedGenresIds);
  }

  render() {
    return (
      <div>
        <MoviesRender />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesByGenres);
