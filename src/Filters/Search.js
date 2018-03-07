import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import * as actions from "./Actions";
import {
  TextField,
  SelectField,
  Autocomplete,
  SelectionControlGroup
} from "react-md";

const mapDispatchToProps = dispatch => ({
  fetchAutocompleteMovies: value => {
    dispatch(actions.FETCH_AUTOCOMPLETE_MOVIES(value));
  },
  fetchSearchMovies: (value, page = 1) => {
    dispatch(actions.FETCH_SEARCH_MOVIES(value, page));
  }
});

const mapStateToProps = state => ({
  autocompleteMovies: state.filtersReducer.autocompleteMovies
});

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      autocompleteMovies: []
    };
  }

  separateMovies = movies => {
    return movies.map(movie => movie.title).slice(0, 8);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      autocompleteMovies: this.separateMovies(nextProps.autocompleteMovies)
    });
  }

  handleChange = event => {
    this.setState(
      ({ value }) => ({ value: event }),
      () => {
        this.state.value.length &&
          this.props.fetchAutocompleteMovies(this.state.value);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchSearchMovies(this.state.value);
  };

  linkToSingleMovie = movieid => {
    this.props.history.push(`/movies/${movieid}`);
  };

  handleAutocomplete = event => {
    let autocompletedmovie = this.props.autocompleteMovies.filter(movie => {
      return movie.title === event;
    });
    this.linkToSingleMovie(autocompletedmovie[0].id);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ flex: 1 }}>
        <Autocomplete
          label="Search by title"
          placeholder="La la land"
          data={this.state.autocompleteMovies}
          onChange={this.handleChange}
          onAutocomplete={this.handleAutocomplete}
        />
      </form>
    );
  }
}

Search.propTypes = {
  autocompleteMovies: propTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
